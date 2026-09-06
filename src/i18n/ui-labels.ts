import type { Locale } from './locale-utils';

export interface UiLabels {
  skipToContent: string;
  languageSwitcherLabel: string;
  promptUser: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  networkDialogLabel: string;
  networkHint: string;
  networkSkip: string;
  networkMapButton: string;
  networkSectionClose: string;
  sectionNavigationLabel: string;
  technologiesLabel: string;
  assistantButton: string;
  assistantDialogLabel: string;
  assistantClose: string;
  assistantDisclosure: string;
  assistantGreeting: string;
  assistantPlaceholder: string;
  assistantSend: string;
  assistantSuggestedLabel: string;
  assistantQuestions: string[];
  assistantUnavailable: string;
  assistantRateLimited: string;
  assistantInputTooLong: string;
  assistantVoiceButton: string;
  assistantVoiceStop: string;
  assistantVoiceUnavailable: string;
  assistantVoiceUnavailableLocale: string;
  assistantVoiceDisclosure: string;
  assistantVoiceConnecting: string;
  assistantVoiceListening: string;
  assistantVoiceReconnecting: string;
  assistantVoiceEnded: string;
  assistantVoiceQuotaReached: string;
  assistantVoiceMicDenied: string;
  assistantVoiceError: string;
  assistantVoiceCallHint: string;
  assistantVoiceCallLimit: string;
  assistantCallAiNotice: string;
  assistantCallStart: string;
  assistantCallEnd: string;
  assistantCallBack: string;
  assistantCallYou: string;
  assistantCallAssistant: string;
  assistantCallYourTurn: string;
  assistantCallSpeaking: string;
  assistantCallSilenceEnded: string;
  assistantCallTimeLeft: string;
}

export const uiLabels: Record<Locale, UiLabels> = {
  en: {
    skipToContent: 'Skip to content',
    languageSwitcherLabel: 'Change language',
    promptUser: 'nam@portfolio',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    networkDialogLabel: 'Portfolio network map',
    networkHint: 'Select a node to open that section',
    networkSkip: 'view --full-page',
    networkMapButton: 'Open network map',
    networkSectionClose: 'Close section window',
    sectionNavigationLabel: 'Section navigation',
    technologiesLabel: 'Technologies',
    assistantButton: 'ask --assistant',
    assistantDialogLabel: 'AI assistant',
    assistantClose: 'Close assistant window',
    assistantDisclosure:
      "Conversations are saved for quality review and processed by Google's Gemini API.",
    assistantGreeting:
      "Hi — I'm Nam's assistant. Ask me about his work, experience, or availability and I'll share what I know.",
    assistantPlaceholder: 'Type a message…',
    assistantSend: 'Send',
    assistantSuggestedLabel: 'Try asking:',
    assistantQuestions: [
      "What's Nam's notice period?",
      'Does Nam need visa sponsorship?',
      'Is Nam open to relocation?',
      "What are Nam's salary expectations?",
      'Why is Nam looking for a new role?',
      'What project is Nam most proud of?',
      'How much Java and Spring Boot experience does Nam have?',
      'Is Nam open to remote work?',
      'What does Nam currently work on at Cumulocity?',
    ],
    assistantUnavailable: 'Sorry, the assistant is temporarily unavailable. Please try again in a moment.',
    assistantRateLimited: "You're sending messages too quickly — please wait a moment and try again.",
    assistantInputTooLong: 'That message is too long — please shorten it and try again.',
    assistantVoiceButton: 'voice --live',
    assistantVoiceStop: 'stop --live',
    assistantVoiceUnavailable: 'Live voice isn’t available yet — keep chatting here instead.',
    assistantVoiceUnavailableLocale:
      'Live voice is available in English and German only — keep chatting here in the meantime.',
    assistantVoiceDisclosure: 'Voice sessions are limited to 10 minutes and share a daily cap across all visitors.',
    assistantVoiceConnecting: 'Connecting…',
    assistantVoiceListening: 'Listening — speak now.',
    assistantVoiceReconnecting: 'Connection dropped — reconnecting…',
    assistantVoiceEnded: 'Voice session ended. Start a new one anytime.',
    assistantVoiceQuotaReached: 'Voice quota reached for today — try again tomorrow, or keep chatting here.',
    assistantVoiceMicDenied:
      'Microphone access was denied — allow access in your browser settings to use voice mode.',
    assistantVoiceError: 'Voice connection failed — please try again.',
    assistantVoiceCallHint: 'Call the assistant',
    assistantVoiceCallLimit: '10 min limit · shared daily cap',
    assistantCallAiNotice: "You'll be talking to an AI assistant, not to Nam.",
    assistantCallStart: 'start call',
    assistantCallEnd: 'end call',
    assistantCallBack: 'back to chat',
    assistantCallYou: 'you',
    assistantCallAssistant: 'assistant',
    assistantCallYourTurn: 'Your turn',
    assistantCallSpeaking: 'Assistant is speaking',
    assistantCallSilenceEnded: 'Call ended after a minute of silence.',
    assistantCallTimeLeft: 'Time left',
  },
  de: {
    skipToContent: 'Zum Inhalt springen',
    languageSwitcherLabel: 'Sprache wechseln',
    promptUser: 'nam@portfolio',
    emailLabel: 'E-Mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    networkDialogLabel: 'Portfolio-Netzwerkkarte',
    networkHint: 'Wähle einen Knoten, um den Abschnitt zu öffnen',
    networkSkip: 'view --full-page // Ganze Seite',
    networkMapButton: 'Netzwerkkarte öffnen',
    networkSectionClose: 'Abschnittsfenster schließen',
    sectionNavigationLabel: 'Abschnittsnavigation',
    technologiesLabel: 'Technologien',
    assistantButton: 'ask --assistant // KI-Assistent',
    assistantDialogLabel: 'KI-Assistent',
    assistantClose: 'Assistentenfenster schließen',
    assistantDisclosure:
      'Unterhaltungen werden zur Qualitätsprüfung gespeichert und über die Gemini-API von Google verarbeitet.',
    assistantGreeting:
      'Hallo — ich bin Nams Assistent. Frag mich nach seiner Arbeit, seiner Erfahrung oder seiner Verfügbarkeit, und ich teile, was ich weiß.',
    assistantPlaceholder: 'Nachricht eingeben…',
    assistantSend: 'Senden',
    assistantSuggestedLabel: 'Frag zum Beispiel:',
    assistantQuestions: [
      'Wie lang ist Nams Kündigungsfrist?',
      'Benötigt Nam ein Visum-Sponsoring?',
      'Ist Nam offen für einen Umzug?',
      'Was sind Nams Gehaltsvorstellungen?',
      'Warum möchte Nam die Stelle wechseln?',
      'Auf welches Projekt ist Nam am meisten stolz?',
      'Wie viel Erfahrung hat Nam mit Java und Spring Boot?',
      'Ist Nam offen für Remote-Arbeit?',
      'Woran arbeitet Nam aktuell bei Cumulocity?',
    ],
    assistantUnavailable: 'Der Assistent ist momentan nicht verfügbar. Bitte versuche es gleich noch einmal.',
    assistantRateLimited: 'Du sendest Nachrichten zu schnell — bitte warte einen Moment und versuche es erneut.',
    assistantInputTooLong: 'Diese Nachricht ist zu lang — bitte kürze sie und versuche es erneut.',
    assistantVoiceButton: 'voice --live',
    assistantVoiceStop: 'stop --live',
    assistantVoiceUnavailable: 'Live-Sprachfunktion ist noch nicht verfügbar — schreib in der Zwischenzeit hier weiter.',
    assistantVoiceUnavailableLocale:
      'Live-Sprachfunktion gibt es nur auf Englisch und Deutsch — schreib in der Zwischenzeit hier weiter.',
    assistantVoiceDisclosure:
      'Sprachsitzungen sind auf 10 Minuten begrenzt und teilen sich ein tägliches Kontingent unter allen Besuchern.',
    assistantVoiceConnecting: 'Verbindung wird aufgebaut…',
    assistantVoiceListening: 'Zuhören — jetzt sprechen.',
    assistantVoiceReconnecting: 'Verbindung unterbrochen — Wiederverbindung läuft…',
    assistantVoiceEnded: 'Sprachsitzung beendet. Du kannst jederzeit eine neue starten.',
    assistantVoiceQuotaReached: 'Das tägliche Sprachkontingent ist erreicht — versuch es morgen erneut oder schreib hier weiter.',
    assistantVoiceMicDenied:
      'Mikrofonzugriff wurde verweigert — erlaube den Zugriff in deinen Browsereinstellungen, um die Sprachfunktion zu nutzen.',
    assistantVoiceError: 'Sprachverbindung fehlgeschlagen — bitte versuch es erneut.',
    assistantVoiceCallHint: 'Assistenten anrufen',
    assistantVoiceCallLimit: '10 Min. Limit · gemeinsames Tageskontingent',
    assistantCallAiNotice: 'Du sprichst mit einem KI-Assistenten, nicht mit Nam.',
    assistantCallStart: 'Anruf starten',
    assistantCallEnd: 'Anruf beenden',
    assistantCallBack: 'zurück zum Chat',
    assistantCallYou: 'du',
    assistantCallAssistant: 'assistent',
    assistantCallYourTurn: 'Du bist dran',
    assistantCallSpeaking: 'Assistent spricht',
    assistantCallSilenceEnded: 'Anruf nach einer Minute Stille beendet.',
    assistantCallTimeLeft: 'Verbleibende Zeit',
  },
  vi: {
    skipToContent: 'Chuyển đến nội dung',
    languageSwitcherLabel: 'Đổi ngôn ngữ',
    promptUser: 'nam@portfolio',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    networkDialogLabel: 'Bản đồ mạng lưới hồ sơ',
    networkHint: 'Chọn một nút để mở mục tương ứng',
    networkSkip: 'view --full-page // Toàn trang',
    networkMapButton: 'Mở bản đồ mạng lưới',
    networkSectionClose: 'Đóng cửa sổ nội dung',
    sectionNavigationLabel: 'Điều hướng các mục',
    technologiesLabel: 'Công nghệ',
    assistantButton: 'ask --assistant // Trợ lý AI',
    assistantDialogLabel: 'Trợ lý AI',
    assistantClose: 'Đóng cửa sổ trợ lý',
    assistantDisclosure:
      'Cuộc trò chuyện được lưu lại để kiểm tra chất lượng và được xử lý qua Gemini API của Google.',
    assistantGreeting:
      'Xin chào — mình là trợ lý của Nam. Hãy hỏi mình về công việc, kinh nghiệm hay khả năng nhận việc của anh ấy, mình sẽ chia sẻ những gì mình biết.',
    assistantPlaceholder: 'Nhập tin nhắn…',
    assistantSend: 'Gửi',
    assistantSuggestedLabel: 'Thử hỏi:',
    assistantQuestions: [
      'Thời gian báo trước nghỉ việc của Nam là bao lâu?',
      'Nam có cần bảo lãnh visa không?',
      'Nam có sẵn sàng chuyển chỗ ở không?',
      'Mức lương mong muốn của Nam là bao nhiêu?',
      'Vì sao Nam muốn rời công việc hiện tại?',
      'Dự án nào Nam tự hào nhất?',
      'Nam có bao nhiêu kinh nghiệm với Java và Spring Boot?',
      'Nam có sẵn sàng làm việc từ xa không?',
      'Hiện tại Nam đang làm gì ở Cumulocity?',
    ],
    assistantUnavailable: 'Trợ lý hiện tạm thời không khả dụng. Vui lòng thử lại sau ít phút.',
    assistantRateLimited: 'Bạn đang gửi tin nhắn quá nhanh — vui lòng đợi một chút rồi thử lại.',
    assistantInputTooLong: 'Tin nhắn này quá dài — vui lòng rút ngắn rồi thử lại.',
    assistantVoiceButton: 'voice --live',
    assistantVoiceStop: 'stop --live',
    assistantVoiceUnavailable: 'Trợ lý giọng nói trực tiếp chưa khả dụng — hãy tiếp tục trò chuyện bằng văn bản.',
    assistantVoiceUnavailableLocale:
      'Trợ lý giọng nói trực tiếp chỉ hỗ trợ tiếng Anh và tiếng Đức — hãy tiếp tục trò chuyện bằng văn bản ở đây.',
    assistantVoiceDisclosure:
      'Phiên trò chuyện giọng nói giới hạn 10 phút và dùng chung hạn mức hàng ngày cho tất cả khách truy cập.',
    assistantVoiceConnecting: 'Đang kết nối…',
    assistantVoiceListening: 'Đang lắng nghe — hãy nói.',
    assistantVoiceReconnecting: 'Mất kết nối — đang kết nối lại…',
    assistantVoiceEnded: 'Phiên trò chuyện giọng nói đã kết thúc. Bạn có thể bắt đầu phiên mới bất cứ lúc nào.',
    assistantVoiceQuotaReached:
      'Đã đạt hạn mức giọng nói hôm nay — vui lòng thử lại vào ngày mai hoặc tiếp tục trò chuyện bằng văn bản.',
    assistantVoiceMicDenied:
      'Quyền truy cập micro đã bị từ chối — vui lòng cho phép trong cài đặt trình duyệt để dùng chế độ giọng nói.',
    assistantVoiceError: 'Kết nối giọng nói thất bại — vui lòng thử lại.',
    assistantVoiceCallHint: 'Gọi cho trợ lý',
    assistantVoiceCallLimit: 'Giới hạn 10 phút · hạn mức chung mỗi ngày',
    assistantCallAiNotice: 'Bạn đang nói chuyện với trợ lý AI, không phải với Nam.',
    assistantCallStart: 'Bắt đầu gọi',
    assistantCallEnd: 'Kết thúc cuộc gọi',
    assistantCallBack: 'quay lại trò chuyện',
    assistantCallYou: 'bạn',
    assistantCallAssistant: 'trợ lý',
    assistantCallYourTurn: 'Đến lượt bạn',
    assistantCallSpeaking: 'Trợ lý đang nói',
    assistantCallSilenceEnded: 'Cuộc gọi đã kết thúc sau một phút im lặng.',
    assistantCallTimeLeft: 'Thời gian còn lại',
  },
};
