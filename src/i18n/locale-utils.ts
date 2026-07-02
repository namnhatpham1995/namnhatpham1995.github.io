import { en } from './content/en';
import { de } from './content/de';
import { vi } from './content/vi';
import type { CvContent } from './content/types';

export const locales = ['en', 'de', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const content: Record<Locale, CvContent> = { en, de, vi };

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

export function getContent(locale: Locale): CvContent {
  return content[locale];
}

export function localePath(locale: Locale, path = ''): string {
  const base = locale === defaultLocale ? '/' : `/${locale}/`;
  return path ? `${base}${path}` : base;
}
