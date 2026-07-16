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
    networkSkip: 'view --full-page',
    networkMapButton: 'Netzwerkkarte öffnen',
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
    networkSkip: 'view --full-page',
    networkMapButton: 'Mở bản đồ mạng lưới',
  },
};
