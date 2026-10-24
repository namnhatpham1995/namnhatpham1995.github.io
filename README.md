# namnhatpham1995.github.io

Personal portfolio, built with [Astro](https://astro.build). Deployed to GitHub Pages via GitHub Actions.

## Stack

- Astro (static output, no UI framework)
- Built-in Astro i18n routing: English (`/`), German (`/de/`), Vietnamese (`/vi/`)
- Plain scoped CSS with a shared design-token file (`src/styles/global.css`) — no CSS framework
- Emerald and gold landing page, with Space Grotesk, DM Sans, and IBM Plex Mono from Google Fonts
- Full English CV and interactive network map at `/profile/`; German and Vietnamese editions retain their existing UI
- Original voice/text assistant integrated into the new homepage
- `@fontsource-variable/jetbrains-mono` self-hosted for the full-profile and translated pages

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build to dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  components/     terminal UI components (nav, cards, sections, etc.)
  i18n/
    content/      typed CV content per locale (en.ts, de.ts, vi.ts, types.ts)
    ui-labels.ts  non-CV UI strings per locale
    locale-utils.ts
  layouts/        base-layout.astro (head, meta, hreflang)
  pages/          index.astro (redesigned home), profile/index.astro (full CV), de/, vi/
  styles/         global.css design tokens
public/           favicon, profile photo
```

## Content updates

CV content lives in `src/i18n/content/{en,de,vi}.ts`, typed against a shared `CvContent`
interface (`src/i18n/content/types.ts`) so a missing locale key fails the build. German and
Vietnamese strings translated from the 2026 CV are flagged `// TODO: native review`.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`
(requires repo Settings → Pages → Source = "GitHub Actions").

## Homepage redesign

`src/pages/index.astro` renders the banner-inspired homepage. Its styles and browser interactions live in `public/redesign/`. Project detail panels read from the existing English CV data, and the homepage reuses `AssistantDialog` with the same deployment environment variables. Illustrative project artwork uses CSS and SVG. The full-profile map and localized editions remain available.
