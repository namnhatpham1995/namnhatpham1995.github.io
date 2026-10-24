import { expect, test } from '@playwright/test';

test('selected work filters reset and project notes restore keyboard focus', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.project:visible')).toHaveCount(6);
  const aiFilter = page.getByRole('button', { name: 'AI', exact: true });
  await aiFilter.click();
  await expect(aiFilter).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.project:visible')).toHaveCount(1);
  const project = page.getByRole('button', { name: 'Read about Portfolio AI Assistant' });
  await project.click();
  const notes = page.locator('#project-dialog');
  await expect(notes).toBeVisible();
  await expect(notes.getByRole('heading')).toContainText('Portfolio AI Assistant');
  await expect(notes.getByRole('link', { name: /Repository/ })).toHaveAttribute('href', 'https://github.com/namnhatpham1995/portfolio-voice-agent');
  await page.keyboard.press('Escape');
  await expect(notes).toBeHidden();
  await expect(project).toBeFocused();
  await page.locator('[data-filter="all"]').click();
  await expect(page.locator('.project:visible')).toHaveCount(6);
  await page.getByRole('button', { name: 'Read story' }).click();
  await expect(notes).toContainText('Internal source code is not publicly available.');
  await notes.getByRole('button', { name: 'Close project details' }).click();
  await expect(notes).toBeHidden();
});

test('architecture controls expose their selection and update the explanation', async ({ page }) => {
  await page.goto('/');
  const cloud = page.getByRole('button', { name: 'Explore cloud infrastructure' });
  await cloud.focus();
  await page.keyboard.press('Enter');
  await expect(cloud).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Explore Java and Spring Boot' })).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#node-caption')).toContainText('repeatable deployment workflows');
});

test('mobile navigation opens, follows a section, and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(nav).toBeVisible();
  await nav.getByRole('link', { name: 'Selected work' }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(nav).toBeHidden();
  await toggle.click();
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  await expect(toggle).toBeFocused();
});

test('homepage fits phone, tablet, and desktop widths without clipping', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), { message: `Horizontal overflow at ${width}px` }).toBe(true);
  }
});

test('full CV and language editions stay reachable from the new homepage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explore my full profile & network map' }).click();
  await expect(page).toHaveURL(/\/profile\/$/);
  await expect(page.locator('#network-intro')).toBeVisible();
  await page.goto('/');
  await page.getByRole('link', { name: 'Deutsch', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await page.goto('/');
  await page.getByRole('link', { name: 'Tiếng Việt', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'vi');
});
