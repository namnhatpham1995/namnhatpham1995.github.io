import { expect, test } from '@playwright/test';

test('opening and immediately closing a node restores it and permits the next section', async ({ page }) => {
  await page.goto('/');
  const experience = page.locator('[data-network-node="experience"]');
  await experience.click();
  await page.keyboard.press('Escape');
  const dialog = page.locator('#network-section-dialog');
  await expect(dialog).toBeHidden();
  await expect(experience).toBeFocused();
  await expect(page.locator('#main section#experience')).toBeAttached();
  await page.locator('[data-network-node="projects"]').click();
  await expect(dialog.locator('section#projects')).toBeVisible();
  await dialog.locator('[data-network-dialog-close]').click();
  await expect(dialog).toBeHidden();
  await expect(page.locator('.network-signal')).toHaveCount(0);
});

test('reduced motion preserves node navigation without pulses or window scans', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const node = page.locator('[data-network-node="skills"]');
  await node.focus();
  await page.keyboard.press('Enter');
  const dialog = page.locator('#network-section-dialog');
  await expect(dialog.locator('section#skills')).toBeVisible();
  await expect(page.locator('.network-signal')).toHaveCount(0);
  expect(await dialog.locator('.network-section-dialog__window').evaluate(el => getComputedStyle(el, '::after').display)).toBe('none');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(node).toBeFocused();
});
