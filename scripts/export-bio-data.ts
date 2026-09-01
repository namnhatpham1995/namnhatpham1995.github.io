import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { en } from '../src/i18n/content/en.ts';
import { de } from '../src/i18n/content/de.ts';
import { vi } from '../src/i18n/content/vi.ts';
import type { CvContent } from '../src/i18n/content/types.ts';

const locales: Record<string, CvContent> = { en, de, vi };

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(rootDir, 'public', 'data');
mkdirSync(outDir, { recursive: true });

for (const [locale, content] of Object.entries(locales)) {
  const fingerprint = createHash('sha256').update(JSON.stringify(content)).digest('hex');
  const outPath = join(outDir, `bio-${locale}.json`);
  writeFileSync(outPath, `${JSON.stringify({ ...content, fingerprint }, null, 2)}\n`);
  console.log(`wrote ${outPath}`);
}
