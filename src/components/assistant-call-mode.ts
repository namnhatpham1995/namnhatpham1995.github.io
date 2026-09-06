// Drives the dialog's live-call mode: the block-glyph level meters, the
// session countdown, the silence guard, and the running transcript. Split
// out of assistant-dialog.astro so that file stays about the chat surface
// and its wiring rather than carrying a second UI's state machine.
//
// The meters are the call's primary feedback: each row is a scrolling
// waveform of one speaker's real signal (mic peak for the visitor, an
// analyser on the playback graph for the assistant), so "who is talking"
// is shown with data rather than an animation that guesses. That also
// means the call is followable with the sound off, which the transcript
// completes.

import { VoiceClient, type VoiceStatus } from './assistant-voice-client';

export interface CallModeLabels {
  connecting: string;
  listening: string;
  reconnecting: string;
  ended: string;
  quotaReached: string;
  micDenied: string;
  error: string;
  you: string;
  assistant: string;
  yourTurn: string;
  speaking: string;
  silenceEnded: string;
}

interface CallModeOptions {
  labels: CallModeLabels;
  voiceUrl: string;
  locale: string;
  /** Called when the visitor leaves the call surface for the chat. */
  onExit: () => void;
}

const METER_COLUMNS = 28;
const METER_GLYPHS = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
const METER_FPS_INTERVAL_MS = 50;

// Mirrors the backend's SESSION_CAP_SECONDS (app/voice_quota.py). The clock
// restarts whenever the socket reopens, because a browser-side reconnect
// opens a brand-new backend session with its own cap.
const SESSION_LIMIT_SECONDS = 600;
const TIMER_WARN_SECONDS = 120;
const TIMER_CRITICAL_SECONDS = 30;

// Speech thresholds, tuned against the mic peak/analyser ranges rather than
// absolute loudness -- low enough to catch quiet speech, high enough that
// room tone doesn't read as talking.
const USER_SPEAKING_LEVEL = 0.06;
const ASSISTANT_SPEAKING_LEVEL = 0.02;

const NUDGE_AFTER_MS = 2500;
// An abandoned tab holds one of the day's shared voice sessions open for the
// full 10 minutes, so a call nobody is on hangs itself up.
const SILENCE_END_MS = 60_000;

export class CallMode {
  private readonly root: HTMLElement;
  private readonly labels: CallModeLabels;
  private readonly voiceUrl: string;
  private readonly locale: string;
  private readonly onExit: () => void;

  private readonly preEl: HTMLElement | null;
  private readonly liveEl: HTMLElement | null;
  private readonly messageEl: HTMLElement | null;
  private readonly statusEl: HTMLElement | null;
  private readonly timerEl: HTMLElement | null;
  private readonly transcriptEl: HTMLElement | null;
  private readonly meterEls: Record<'user' | 'assistant', HTMLElement | null>;

  private client: VoiceClient | null = null;
  private readonly history = {
    user: new Array<number>(METER_COLUMNS).fill(0),
    assistant: new Array<number>(METER_COLUMNS).fill(0),
  };
  private lastMeterPaint = 0;
  private lastActivityAt = 0;
  private deadlineAt = 0;
  private ticker: ReturnType<typeof setInterval> | null = null;
  private transcriptLine: { speaker: 'user' | 'assistant'; el: HTMLElement } | null = null;

  constructor(root: HTMLElement, options: CallModeOptions) {
    this.root = root;
    this.labels = options.labels;
    this.voiceUrl = options.voiceUrl;
    this.locale = options.locale;
    this.onExit = options.onExit;

    this.preEl = root.querySelector('[data-call-pre]');
    this.liveEl = root.querySelector('[data-call-live]');
    this.messageEl = root.querySelector('[data-call-message]');
    this.statusEl = root.querySelector('[data-call-status]');
    this.timerEl = root.querySelector('[data-call-timer]');
    this.transcriptEl = root.querySelector('[data-call-transcript]');
    this.meterEls = {
      user: root.querySelector('[data-call-meter="user"]'),
      assistant: root.querySelector('[data-call-meter="assistant"]'),
    };

    root.querySelector('[data-call-start]')?.addEventListener('click', () => this.startCall());
    root.querySelector('[data-call-end]')?.addEventListener('click', () => this.stop());
    root.querySelector('[data-call-back]')?.addEventListener('click', () => {
      this.stop();
      this.onExit();
    });
  }

  /** Shows the pre-call screen: disclosure first, microphone untouched. */
  showPreCall(message?: string): void {
    this.preEl?.removeAttribute('hidden');
    this.liveEl?.setAttribute('hidden', '');
    this.timerEl?.setAttribute('hidden', '');
    if (this.messageEl) {
      this.messageEl.textContent = message ?? '';
      this.messageEl.toggleAttribute('hidden', !message);
    }
    this.paintMeters(true);
  }

  startCall(): void {
    if (this.client) return;
    this.client = new VoiceClient({
      wsUrl: this.voiceUrl,
      locale: this.locale,
      onStatusChange: (status) => this.applyStatus(status),
      onLevels: (user, assistant) => this.applyLevels(user, assistant),
      onTranscript: (speaker, text, finished) => this.appendTranscript(speaker, text, finished),
    });
    this.transcriptEl?.replaceChildren();
    this.transcriptLine = null;
    void this.client.start();
  }

  /** Ends any live call and returns to the pre-call screen. */
  stop(message?: string): void {
    this.client?.stop();
    this.client = null;
    this.stopTicker();
    this.showPreCall(message);
  }

  private applyStatus(status: VoiceStatus): void {
    if (status === 'listening') {
      this.preEl?.setAttribute('hidden', '');
      this.liveEl?.removeAttribute('hidden');
      this.timerEl?.removeAttribute('hidden');
      // A reconnect is a fresh backend session, so its cap starts over too.
      this.deadlineAt = Date.now() + SESSION_LIMIT_SECONDS * 1000;
      this.lastActivityAt = Date.now();
      this.startTicker();
      this.setStatusText(this.labels.listening, false);
      return;
    }

    if (status === 'connecting' || status === 'reconnecting') {
      this.preEl?.setAttribute('hidden', '');
      this.liveEl?.removeAttribute('hidden');
      this.setStatusText(status === 'connecting' ? this.labels.connecting : this.labels.reconnecting, false);
      return;
    }

    if (status === 'idle') return; // our own stop(); the caller already chose the screen

    // Everything else is terminal: surface why and go back to the start.
    const reasons: Record<string, string> = {
      ended: this.labels.ended,
      'quota-reached': this.labels.quotaReached,
      'mic-denied': this.labels.micDenied,
      error: this.labels.error,
    };
    this.client = null;
    this.stopTicker();
    this.showPreCall(reasons[status] ?? this.labels.error);
  }

  private applyLevels(userLevel: number, assistantLevel: number): void {
    this.history.user.push(userLevel);
    this.history.user.shift();
    this.history.assistant.push(assistantLevel);
    this.history.assistant.shift();

    const userSpeaking = userLevel > USER_SPEAKING_LEVEL;
    const assistantSpeaking = assistantLevel > ASSISTANT_SPEAKING_LEVEL;
    if (userSpeaking || assistantSpeaking) this.lastActivityAt = Date.now();

    const quietFor = Date.now() - this.lastActivityAt;
    if (assistantSpeaking) this.setStatusText(this.labels.speaking, false);
    else if (userSpeaking) this.setStatusText(this.labels.listening, false);
    else if (quietFor > NUDGE_AFTER_MS) this.setStatusText(this.labels.yourTurn, true);

    this.paintMeters();
  }

  private paintMeters(force = false): void {
    const now = performance.now();
    if (!force && now - this.lastMeterPaint < METER_FPS_INTERVAL_MS) return;
    this.lastMeterPaint = now;
    for (const speaker of ['user', 'assistant'] as const) {
      const el = this.meterEls[speaker];
      if (!el) continue;
      el.textContent = this.history[speaker]
        .map((level) => {
          const index = Math.min(METER_GLYPHS.length - 1, Math.round(level * (METER_GLYPHS.length - 1) * 1.6));
          return METER_GLYPHS[Math.max(0, index)];
        })
        .join('');
    }
  }

  private setStatusText(text: string, waiting: boolean): void {
    if (!this.statusEl || this.statusEl.dataset.text === text) return;
    this.statusEl.dataset.text = text;
    this.statusEl.textContent = text;
    this.statusEl.toggleAttribute('data-waiting', waiting);
  }

  private appendTranscript(speaker: 'user' | 'assistant', text: string, finished: boolean): void {
    if (!this.transcriptEl) return;
    if (text) {
      if (!this.transcriptLine || this.transcriptLine.speaker !== speaker) {
        const line = document.createElement('p');
        line.className = `assistant-call__line assistant-call__line--${speaker}`;
        const who = document.createElement('span');
        who.className = 'assistant-call__line-speaker';
        who.textContent = speaker === 'user' ? this.labels.you : this.labels.assistant;
        const body = document.createElement('span');
        body.className = 'assistant-call__line-body';
        line.append(who, body);
        this.transcriptEl.append(line);
        this.transcriptLine = { speaker, el: body };
      }
      // The finished event carries the whole utterance rather than the last
      // fragment, so it replaces the line instead of extending it. Replacing
      // rather than ignoring also repairs a line whose fragments were partly
      // lost, since this is the only authoritative copy of the text.
      this.transcriptLine.el.textContent = finished ? text : (this.transcriptLine.el.textContent ?? '') + text;
      this.transcriptEl.scrollTop = this.transcriptEl.scrollHeight;
    }
    if (finished) this.transcriptLine = null;
  }

  private startTicker(): void {
    this.stopTicker();
    this.renderTimer();
    this.ticker = setInterval(() => {
      this.renderTimer();
      if (Date.now() - this.lastActivityAt > SILENCE_END_MS) this.stop(this.labels.silenceEnded);
    }, 1000);
  }

  private stopTicker(): void {
    if (this.ticker !== null) clearInterval(this.ticker);
    this.ticker = null;
  }

  private renderTimer(): void {
    if (!this.timerEl) return;
    const remaining = Math.max(0, Math.round((this.deadlineAt - Date.now()) / 1000));
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    this.timerEl.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    this.timerEl.dataset.level =
      remaining <= TIMER_CRITICAL_SECONDS ? 'critical' : remaining <= TIMER_WARN_SECONDS ? 'warn' : 'normal';
  }
}
