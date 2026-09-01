import { expect, test } from '@playwright/test';

test('ask my assistant closes the network overlay and opens the coming-soon dialog', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#assistant-dialog');
  const trigger = overlay.locator('[data-network-assistant]');
  await expect(overlay).toBeVisible();

  await trigger.click();
  await expect(overlay).toBeHidden();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Coming soon')).toBeVisible();

  await dialog.locator('[data-assistant-dialog-close]').click();
  await expect(dialog).toBeHidden();
  await expect(page.locator('#main')).toBeFocused();
});

test('Escape closes the assistant dialog', async ({ page }) => {
  await page.goto('/');

  const dialog = page.locator('#assistant-dialog');
  await page.locator('[data-network-assistant]').click();
  await expect(dialog).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('outside click closes the assistant dialog', async ({ page }) => {
  await page.goto('/');

  const dialog = page.locator('#assistant-dialog');
  await page.locator('[data-network-assistant]').click();
  await expect(dialog).toBeVisible();

  const box = await dialog.boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.click(Math.max(2, box!.x - 12), Math.max(2, box!.y - 12));
  await expect(dialog).toBeHidden();
});

const localeCases = [
  { path: '/', button: 'ask --assistant', heading: 'Coming soon' },
  { path: '/de/', button: 'ask --assistant // KI-Assistent', heading: 'Demnächst verfügbar' },
  { path: '/vi/', button: 'ask --assistant // Trợ lý AI', heading: 'Sắp ra mắt' },
];

for (const localeCase of localeCases) {
  test(`assistant entry point is localized for ${localeCase.path}`, async ({ page }) => {
    await page.goto(localeCase.path);

    const trigger = page.locator('[data-network-assistant]');
    await expect(trigger).toContainText(localeCase.button);

    await trigger.click();
    await expect(page.locator('#assistant-dialog').getByText(localeCase.heading)).toBeVisible();
  });
}
