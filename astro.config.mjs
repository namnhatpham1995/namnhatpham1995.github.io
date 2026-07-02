import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://namnhatpham1995.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
