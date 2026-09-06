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

export class VoiceClient {
  private readonly wsUrl: string;
  private readonly locale: string;
  private readonly onStatusChange: (status: VoiceStatus) => void;

  private ws: WebSocket | null = null;
  private micContext: AudioContext | null = null;
  private micStream: MediaStream | null = null;
  private micWorklet: AudioWorkletNode | null = null;
  private micWorkletModuleLoaded = false;
  private playbackContext: AudioContext | null = null;
  private playbackTime = 0;
  private stoppedByUser = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private visibilityHandler: (() => void) | null = null;

  constructor(options: VoiceClientOptions) {
    this.wsUrl = options.wsUrl;
    this.locale = options.locale;
    this.onStatusChange = options.onStatusChange;
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
    };

    ws.onclose = (event) => {
      this.stopMicCapture();
      if (this.stoppedByUser) return;
      this.handleClose(event.code);
    };
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
        if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(floatTo16BitPcm(event.data as Float32Array));
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
    source.connect(ctx.destination);
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
    this.stopMicCapture();
    this.micStream?.getTracks().forEach((track) => track.stop());
    this.micStream = null;
    void this.micContext?.close();
    this.micContext = null;
    void this.playbackContext?.close();
    this.playbackContext = null;
    if (this.visibilityHandler) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
      this.visibilityHandler = null;
    }
  }
}
