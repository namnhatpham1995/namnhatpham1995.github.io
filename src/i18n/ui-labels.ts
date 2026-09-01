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
  assistantComingSoonHeading: string;
  assistantComingSoonBody: string;
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
    assistantComingSoonHeading: 'Coming soon',
    assistantComingSoonBody:
      "An AI assistant grounded in this site's content is in the works — soon it will answer questions about my experience, skills, and background, by text or voice. More soon.",
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
    assistantComingSoonHeading: 'Demnächst verfügbar',
    assistantComingSoonBody:
      'Ein KI-Assistent auf Basis der Inhalte dieser Seite ist in Arbeit — er wird bald Fragen zu meiner Erfahrung, meinen Fähigkeiten und meinem Werdegang per Text oder Sprache beantworten. Mehr dazu in Kürze.',
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
    assistantComingSoonHeading: 'Sắp ra mắt',
    assistantComingSoonBody:
      'Một trợ lý AI dựa trên nội dung của trang này đang được xây dựng — trợ lý sẽ sớm trả lời các câu hỏi về kinh nghiệm, kỹ năng và quá trình làm việc bằng văn bản hoặc giọng nói. Cập nhật sẽ có sớm.',
  },
};
