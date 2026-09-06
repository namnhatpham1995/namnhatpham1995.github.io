// Speaks the portfolio-voice-agent backend's /ws/voice protocol directly
// (see that repo's app/voice_session.py): binary frames are 16kHz mono
// PCM16 mic audio upstream, 24kHz mono PCM16 playback audio downstream;
// JSON text frames carry ADK events the UI doesn't currently need. Close
// codes: 4403 origin/locale rejected, 4429 connect-rate-limited or the
// daily voice quota exhausted, 4408 the 10-minute session cap or idle
// timeout, 4500 the session ended for good (including the backend giving
// up on its own Gemini-side reconnect).
//
// The backend's GoAway/network-drop reconnection (voice-qa-backend's
// design.md "Reconnection behavior") happens entirely between the backend
// and Gemini and is invisible here -- this browser<->backend WebSocket
// stays open throughout it. What this module retries is a different case:
// the browser's own connection to the backend dropping (wifi hiccup,
// backgrounding). A retry there always opens a brand-new backend session
// (the backend has no way to resume a prior browser session), so it
// restores the connection, not the conversation context.

export type VoiceStatus =
  | 'idle'
  | 'connecting'
  | 'listening'
  | 'reconnecting'
  | 'ended'
  | 'quota-reached'
  | 'mic-denied'
  | 'error';

export interface VoiceClientOptions {
  wsUrl: string;
  locale: string;
  onStatusChange: (status: VoiceStatus) => void;
  /** Speech levels (0-1) for both sides, emitted per animation frame while
   * a session is live. The mic side is measured from the capture worklet's
   * own samples and the assistant side from an analyser on the playback
   * graph, so both are real signal rather than an inferred "is talking". */
  onLevels?: (userLevel: number, assistantLevel: number) => void;
  /** Incremental transcript chunks from the backend's JSON frames. `text`
   * is a delta to append, not the full utterance; `finished` marks the end
   * of one side's turn. */
  onTranscript?: (speaker: 'user' | 'assistant', text: string, finished: boolean) => void;
}

const MIC_SAMPLE_RATE = 16000;
const PLAYBACK_SAMPLE_RATE = 24000;
const RECONNECT_ATTEMPTS = 4;
const RECONNECT_BASE_DELAY_MS = 500;

// Runs on the audio rendering thread; posts each render quantum's mono
// samples back to the main thread for PCM16 encoding and sending.
// ScriptProcessorNode would be simpler but is deprecated in favor of this.
const MIC_WORKLET_SOURCE = `
class MicCaptureProcessor extends AudioWorkletProcessor {
  process(inputs) {
    const channel = inputs[0]?.[0];
    if (channel && channel.length) this.port.postMessage(channel.slice());
    return true;
  }
}
registerProcessor('mic-capture-processor', MicCaptureProcessor);
`;

function floatTo16BitPcm(input: Float32Array): ArrayBuffer {
  const pcm16 = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]));
    pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return pcm16.buffer;
}

// How fast the mic meter falls back toward zero between worklet messages.
// Without a decay the meter would hold the loudest sample of the session.
const LEVEL_DECAY = 0.82;

export class VoiceClient {
  private readonly wsUrl: string;
  private readonly locale: string;
  private readonly onStatusChange: (status: VoiceStatus) => void;
  private readonly onLevels?: (userLevel: number, assistantLevel: number) => void;
  private readonly onTranscript?: (speaker: 'user' | 'assistant', text: string, finished: boolean) => void;

  private ws: WebSocket | null = null;
  private micContext: AudioContext | null = null;
  private micStream: MediaStream | null = null;
  private micWorklet: AudioWorkletNode | null = null;
  private micWorkletModuleLoaded = false;
  private playbackContext: AudioContext | null = null;
  private playbackAnalyser: AnalyserNode | null = null;
  private playbackSamples: Uint8Array<ArrayBuffer> | null = null;
  // Scheduled playback sources are retained so an interruption can stop
  // audio that is already queued -- otherwise the assistant keeps talking
  // over a visitor who just interrupted it.
  private readonly scheduledSources = new Set<AudioBufferSourceNode>();
  private playbackTime = 0;
  private userLevel = 0;
  private levelFrame: number | null = null;
  private stoppedByUser = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private visibilityHandler: (() => void) | null = null;

  constructor(options: VoiceClientOptions) {
    this.wsUrl = options.wsUrl;
    this.locale = options.locale;
    this.onStatusChange = options.onStatusChange;
    this.onLevels = options.onLevels;
    this.onTranscript = options.onTranscript;
  }

  async start(): Promise<void> {
    if (this.micContext) return; // already starting/active

    this.stoppedByUser = false;
    this.reconnectAttempt = 0;
    this.micWorkletModuleLoaded = false;
    this.onStatusChange('connecting');

    // Created synchronously, still inside the click handler's call stack,
    // so iOS Safari counts this as user-gesture-initiated and won't
    // suspend it -- creating these lazily on first audio would silently
    // fail there (frontend tasks.md 3.3/3.4).
    this.micContext = new AudioContext({ sampleRate: MIC_SAMPLE_RATE });
    this.playbackContext = new AudioContext({ sampleRate: PLAYBACK_SAMPLE_RATE });
    void this.micContext.resume();
    void this.playbackContext.resume();
    this.playbackTime = 0;
    this.userLevel = 0;

    // Everything plays through the analyser so the UI can show the
    // assistant's real output level rather than guessing from chunk arrival.
    this.playbackAnalyser = this.playbackContext.createAnalyser();
    this.playbackAnalyser.fftSize = 256;
    this.playbackAnalyser.connect(this.playbackContext.destination);
    this.playbackSamples = new Uint8Array(this.playbackAnalyser.fftSize);
    this.startLevelLoop();

    if (!this.visibilityHandler) {
      this.visibilityHandler = () => {
        if (document.visibilityState === 'visible') {
          void this.micContext?.resume();
          void this.playbackContext?.resume();
        }
      };
      document.addEventListener('visibilitychange', this.visibilityHandler);
    }

    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, sampleRate: MIC_SAMPLE_RATE },
      });
    } catch {
      this.onStatusChange('mic-denied');
      this.teardownAudio();
      return;
    }

    await this.connect();
  }

  stop(): void {
    this.stoppedByUser = true;
    this.clearReconnectTimer();
    this.ws?.close(1000);
    this.ws = null;
    this.teardownAudio();
    this.onStatusChange('idle');
  }

  private async connect(): Promise<void> {
    const url = `${this.wsUrl}?locale=${encodeURIComponent(this.locale)}`;
    const ws = new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    this.ws = ws;

    ws.onopen = () => {
      this.reconnectAttempt = 0;
      void this.startMicCapture();
      this.onStatusChange('listening');
    };

    ws.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) this.playPcm(event.data);
      else if (typeof event.data === 'string') this.handleServerEvent(event.data);
    };

    ws.onclose = (event) => {
      this.stopMicCapture();
      if (this.stoppedByUser) return;
      this.handleClose(event.code);
    };
  }

  // The backend serializes ADK events with by_alias=True, so field names
  // arrive camelCased (`inputTranscription`, not `input_transcription`).
  private handleServerEvent(raw: string): void {
    let payload: {
      interrupted?: boolean;
      turnComplete?: boolean;
      inputTranscription?: { text?: string; finished?: boolean };
      outputTranscription?: { text?: string; finished?: boolean };
    };
    try {
      payload = JSON.parse(raw);
    } catch {
      return; // a frame we don't understand is not worth breaking the call over
    }

    if (payload.interrupted) this.flushPlayback();

    const input = payload.inputTranscription;
    if (input?.text || input?.finished) {
      this.onTranscript?.('user', input.text ?? '', input.finished ?? false);
    }
    const output = payload.outputTranscription;
    if (output?.text || output?.finished) {
      this.onTranscript?.('assistant', output.text ?? '', output.finished ?? false);
    }
    // outputTranscription.finished doesn't always fire (e.g. the backend's
    // greeting retry: a turn that produced a transcript but no audio at
    // all) -- turnComplete is the backend's own authoritative end-of-turn
    // signal, so treat it as an equally valid close for the assistant line.
    if (payload.turnComplete) {
      this.onTranscript?.('assistant', '', true);
    }
  }

  /** Drops audio that is scheduled but not yet heard. Called when the
   * backend reports the visitor interrupted the assistant mid-sentence. */
  private flushPlayback(): void {
    for (const source of this.scheduledSources) {
      try {
        source.stop();
      } catch {
        // already finished; the `ended` handler has it covered
      }
    }
    this.scheduledSources.clear();
    this.playbackTime = 0;
  }

  private startLevelLoop(): void {
    if (this.levelFrame !== null) return;
    const tick = () => {
      this.levelFrame = requestAnimationFrame(tick);
      if (!this.onLevels) return;
      let assistantLevel = 0;
      if (this.playbackAnalyser && this.playbackSamples) {
        this.playbackAnalyser.getByteTimeDomainData(this.playbackSamples);
        for (const sample of this.playbackSamples) {
          assistantLevel = Math.max(assistantLevel, Math.abs(sample - 128) / 128);
        }
      }
      this.onLevels(this.userLevel, assistantLevel);
      this.userLevel *= LEVEL_DECAY;
    };
    this.levelFrame = requestAnimationFrame(tick);
  }

  private stopLevelLoop(): void {
    if (this.levelFrame !== null) cancelAnimationFrame(this.levelFrame);
    this.levelFrame = null;
    this.userLevel = 0;
    this.onLevels?.(0, 0);
  }

  private handleClose(code: number): void {
    if (code === 4429) {
      this.teardownAudio();
      this.onStatusChange('quota-reached');
      return;
    }
    if (code === 4403) {
      this.teardownAudio();
      this.onStatusChange('error');
      return;
    }
    if (code === 4408 || code === 4500) {
      this.teardownAudio();
      this.onStatusChange('ended');
      return;
    }
    // Abnormal close (e.g. a real network drop): retry with backoff. Each
    // attempt is a fresh backend session, so audio/mic state stays alive
    // across it -- only the socket and mic worklet get recreated.
    if (this.reconnectAttempt >= RECONNECT_ATTEMPTS) {
      this.teardownAudio();
      this.onStatusChange('ended');
      return;
    }
    this.onStatusChange('reconnecting');
    const delay = RECONNECT_BASE_DELAY_MS * 2 ** this.reconnectAttempt;
    this.reconnectAttempt += 1;
    this.reconnectTimer = setTimeout(() => {
      if (!this.stoppedByUser) void this.connect();
    }, delay);
  }

  private async startMicCapture(): Promise<void> {
    if (!this.micContext || !this.micStream) return;
    try {
      if (!this.micWorkletModuleLoaded) {
        const blobUrl = URL.createObjectURL(new Blob([MIC_WORKLET_SOURCE], { type: 'text/javascript' }));
        try {
          await this.micContext.audioWorklet.addModule(blobUrl);
        } finally {
          URL.revokeObjectURL(blobUrl);
        }
        this.micWorkletModuleLoaded = true;
      }
      if (!this.micContext || !this.micStream) return; // torn down while the module was loading
      const source = this.micContext.createMediaStreamSource(this.micStream);
      const worklet = new AudioWorkletNode(this.micContext, 'mic-capture-processor');
      worklet.port.onmessage = (event: MessageEvent) => {
        const samples = event.data as Float32Array;
        // Peak of this quantum, held against the decay in the level loop --
        // cheaper than RMS and reacts fast enough to look like speech.
        let peak = 0;
        for (const sample of samples) peak = Math.max(peak, Math.abs(sample));
        this.userLevel = Math.max(this.userLevel, peak);
        if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(floatTo16BitPcm(samples));
      };
      source.connect(worklet);
      this.micWorklet = worklet;
    } catch {
      // Session ended while the worklet module was loading -- nothing left to capture into.
    }
  }

  private stopMicCapture(): void {
    this.micWorklet?.port.close();
    this.micWorklet?.disconnect();
    this.micWorklet = null;
  }

  private playPcm(buffer: ArrayBuffer): void {
    const ctx = this.playbackContext;
    if (!ctx) return;
    const pcm16 = new Int16Array(buffer);
    const float32 = new Float32Array(pcm16.length);
    for (let i = 0; i < pcm16.length; i++) float32[i] = pcm16[i] / 0x8000;
    const audioBuffer = ctx.createBuffer(1, float32.length, PLAYBACK_SAMPLE_RATE);
    audioBuffer.copyToChannel(float32, 0);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.playbackAnalyser ?? ctx.destination);
    this.scheduledSources.add(source);
    source.addEventListener('ended', () => this.scheduledSources.delete(source));
    // A running cursor rather than starting at currentTime each time --
    // otherwise consecutive chunks overlap or gap instead of playing back
    // as one continuous stream.
    const startAt = Math.max(ctx.currentTime, this.playbackTime);
    source.start(startAt);
    this.playbackTime = startAt + audioBuffer.duration;
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private teardownAudio(): void {
    this.clearReconnectTimer();
    this.stopLevelLoop();
    this.stopMicCapture();
    this.scheduledSources.clear();
    this.micStream?.getTracks().forEach((track) => track.stop());
    this.micStream = null;
    void this.micContext?.close();
    this.micContext = null;
    void this.playbackContext?.close();
    this.playbackContext = null;
    this.playbackAnalyser = null;
    this.playbackSamples = null;
    if (this.visibilityHandler) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
      this.visibilityHandler = null;
    }
  }
}
