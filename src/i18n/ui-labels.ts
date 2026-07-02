import type { Locale } from './locale-utils';

export interface UiLabels {
  skipToContent: string;
  languageSwitcherLabel: string;
  promptUser: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
}

export const uiLabels: Record<Locale, UiLabels> = {
  en: {
    skipToContent: 'Skip to content',
    languageSwitcherLabel: 'Change language',
    promptUser: 'nam@portfolio',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  de: {
    skipToContent: 'Zum Inhalt springen',
    languageSwitcherLabel: 'Sprache wechseln',
    promptUser: 'nam@portfolio',
    emailLabel: 'E-Mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  vi: {
    skipToContent: 'Chuyển đến nội dung',
    languageSwitcherLabel: 'Đổi ngôn ngữ',
    promptUser: 'nam@portfolio',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
};
