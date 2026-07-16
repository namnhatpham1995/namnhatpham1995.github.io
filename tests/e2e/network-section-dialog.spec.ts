import { expect, test } from '@playwright/test';

const sectionIds = [
  'intro',
  'skills',
  'experience',
  'education',
  'projects',
  'certificates',
  'languages',
  'hobbies',
];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.removeItem('network-intro-seen'));
});

test('every network node opens its section and returns to the map', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#network-section-dialog');
  await expect(overlay).toBeVisible();

  for (const sectionId of sectionIds) {
    const node = overlay.locator(`[data-network-node="${sectionId}"]`);
    await node.click();

    await expect(dialog).toBeVisible();
    await expect(dialog.locator(`section#${sectionId}`)).toBeVisible();
    await expect(overlay).toBeVisible();

    if (sectionId === 'intro') {
      await page.waitForTimeout(400);
      await expect(dialog).toBeVisible();
    }

    await dialog.locator('[data-network-dialog-close]').click();
    await expect(dialog).toBeHidden();
    await expect(overlay).toBeVisible();
    await expect(node).toBeFocused();
    await expect(page.locator(`#main section#${sectionId}`)).toBeAttached();
  }
});

test('outside click and Escape close only the section window', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#network-section-dialog');

  await overlay.locator('[data-network-node="skills"]').click();
  await expect(dialog).toBeVisible();
  const dialogBox = await dialog.boundingBox();
  expect(dialogBox).not.toBeNull();
  await page.mouse.click(Math.max(2, dialogBox!.x - 12), Math.max(2, dialogBox!.y - 12));
  await expect(dialog).toBeHidden();
  await expect(overlay).toBeVisible();

  await overlay.locator('[data-network-node="projects"]').click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(overlay).toBeVisible();
});

test('view full page actually hides the network overlay', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  await overlay.locator('[data-network-skip]').click();
  await expect(overlay).toBeHidden({ timeout: 1_000 });
  await expect(page.locator('#main')).toBeVisible();
});

for (const localePath of ['/de/', '/vi/']) {
  test(`section window works for ${localePath}`, async ({ page }) => {
    await page.goto(localePath);

    const overlay = page.locator('#network-intro');
    const dialog = page.locator('#network-section-dialog');
    await overlay.locator('[data-network-node="experience"]').click();
    await expect(dialog.locator('section#experience')).toBeVisible();
    await dialog.locator('[data-network-dialog-close]').click();
    await expect(dialog).toBeHidden();
    await expect(overlay).toBeVisible();
  });
}

test('long content scrolls inside the dialog on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await page.locator('[data-network-node="experience"]').click();
  const dialog = page.locator('#network-section-dialog');
  const body = dialog.locator('[data-network-dialog-body]');
  await expect(dialog).toBeVisible();
  await expect
    .poll(() => body.evaluate((element) => element.scrollHeight > element.clientHeight))
    .toBe(true);
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true);
});
