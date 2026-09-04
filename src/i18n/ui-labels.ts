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
  assistantPlaceholder: string;
  assistantSend: string;
  assistantSuggestedLabel: string;
  assistantQuestions: string[];
  assistantUnavailable: string;
  assistantRateLimited: string;
  assistantInputTooLong: string;
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
    assistantPlaceholder: 'Type a message…',
    assistantSend: 'Send',
    assistantSuggestedLabel: 'Try asking:',
    assistantQuestions: [
      "What's your notice period?",
      'Do you need visa sponsorship?',
      'Are you open to relocation?',
      'What are your salary expectations?',
      'Why are you looking to leave your current role?',
      "What's the project you're most proud of?",
      'How much Java and Spring Boot experience do you have?',
      'Are you open to remote work?',
      'What do you currently work on at Cumulocity?',
    ],
    assistantUnavailable: 'Sorry, the assistant is temporarily unavailable. Please try again in a moment.',
    assistantRateLimited: "You're sending messages too quickly — please wait a moment and try again.",
    assistantInputTooLong: 'That message is too long — please shorten it and try again.',
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
    assistantPlaceholder: 'Nachricht eingeben…',
    assistantSend: 'Senden',
    assistantSuggestedLabel: 'Frag zum Beispiel:',
    assistantQuestions: [
      'Wie ist deine Kündigungsfrist?',
      'Benötigst du ein Visum-Sponsoring?',
      'Bist du offen für einen Umzug?',
      'Was sind deine Gehaltsvorstellungen?',
      'Warum möchtest du deine aktuelle Stelle wechseln?',
      'Auf welches Projekt bist du am meisten stolz?',
      'Wie viel Erfahrung hast du mit Java und Spring Boot?',
      'Bist du offen für Remote-Arbeit?',
      'Woran arbeitest du aktuell bei Cumulocity?',
    ],
    assistantUnavailable: 'Der Assistent ist momentan nicht verfügbar. Bitte versuche es gleich noch einmal.',
    assistantRateLimited: 'Du sendest Nachrichten zu schnell — bitte warte einen Moment und versuche es erneut.',
    assistantInputTooLong: 'Diese Nachricht ist zu lang — bitte kürze sie und versuche es erneut.',
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
    assistantPlaceholder: 'Nhập tin nhắn…',
    assistantSend: 'Gửi',
    assistantSuggestedLabel: 'Thử hỏi:',
    assistantQuestions: [
      'Thời gian báo trước nghỉ việc của bạn là bao lâu?',
      'Bạn có cần bảo lãnh visa không?',
      'Bạn có sẵn sàng chuyển chỗ ở không?',
      'Mức lương mong muốn của bạn là bao nhiêu?',
      'Vì sao bạn muốn rời công việc hiện tại?',
      'Dự án nào bạn tự hào nhất?',
      'Bạn có bao nhiêu kinh nghiệm với Java và Spring Boot?',
      'Bạn có sẵn sàng làm việc từ xa không?',
      'Hiện tại bạn đang làm gì ở Cumulocity?',
    ],
    assistantUnavailable: 'Trợ lý hiện tạm thời không khả dụng. Vui lòng thử lại sau ít phút.',
    assistantRateLimited: 'Bạn đang gửi tin nhắn quá nhanh — vui lòng đợi một chút rồi thử lại.',
    assistantInputTooLong: 'Tin nhắn này quá dài — vui lòng rút ngắn rồi thử lại.',
  },
};
