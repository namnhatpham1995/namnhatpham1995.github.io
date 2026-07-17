import { expect, test, type Locator } from '@playwright/test';

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

const localeCases = [
  {
    path: '/',
    experience: 'experience',
    hint: 'Select a node to open that section',
    close: 'Close section window',
    skip: 'Skip to content',
    navigation: 'Section navigation',
    technologies: 'Technologies',
  },
  {
    path: '/de/',
    experience: 'berufserfahrung',
    hint: 'Wähle einen Knoten, um den Abschnitt zu öffnen',
    close: 'Abschnittsfenster schließen',
    skip: 'Zum Inhalt springen',
    navigation: 'Abschnittsnavigation',
    technologies: 'Technologien',
  },
  {
    path: '/vi/',
    experience: 'kinh nghiệm',
    hint: 'Chọn một nút để mở mục tương ứng',
    close: 'Đóng cửa sổ nội dung',
    skip: 'Chuyển đến nội dung',
    navigation: 'Điều hướng các mục',
    technologies: 'Công nghệ',
  },
];

async function chooseLanguage(switcher: Locator, locale: 'en' | 'de' | 'vi') {
  await switcher.locator('summary').click();
  await switcher.locator(`[data-language-target="${locale}"]`).click();
}

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

for (const localeCase of localeCases) {
  test(`network UI is fully localized for ${localeCase.path}`, async ({ page }) => {
    await page.goto(localeCase.path);

    const overlay = page.locator('#network-intro');
    const dialog = page.locator('#network-section-dialog');
    const experienceNode = overlay.locator('[data-network-node="experience"]');

    await expect(overlay.locator('.network-intro__prompt-hint')).toHaveText(localeCase.hint);
    await expect(experienceNode).toContainText(localeCase.experience);
    await expect(overlay.locator('[data-language-context="network"]')).toBeVisible();
    await expect(page.locator('.skip-link')).toHaveText(localeCase.skip);
    await expect(page.locator('nav.command-nav')).toHaveAttribute('aria-label', localeCase.navigation);
    await expect(page.locator('#projects .project-card__tech').first()).toHaveAttribute(
      'aria-label',
      localeCase.technologies,
    );

    await experienceNode.click();
    await expect(dialog.locator('section#experience')).toBeVisible();
    await expect(dialog.locator('[data-network-dialog-path]')).toHaveText(
      `$ view --section // ${localeCase.experience}`,
    );
    await expect(dialog.locator('[data-network-dialog-close]')).toHaveAttribute(
      'aria-label',
      localeCase.close,
    );
    await expect(dialog.locator('[data-language-context="dialog"]')).toBeVisible();
    await dialog.locator('[data-network-dialog-close]').click();
    await expect(dialog).toBeHidden();
    await expect(overlay).toBeVisible();
  });
}

test('switching language from the network keeps the network open', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  await chooseLanguage(overlay.locator('[data-language-context="network"]'), 'de');

  await expect(page).toHaveURL(/\/de\/$/);
  await expect(overlay).toBeVisible();
  await expect(overlay.locator('[data-network-node="skills"]')).toContainText('fähigkeiten');
});

test('switching language from a section window reopens the translated section', async ({ page }) => {
  await page.goto('/de/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#network-section-dialog');
  await overlay.locator('[data-network-node="experience"]').click();
  await chooseLanguage(dialog.locator('[data-language-context="dialog"]'), 'vi');

  await expect(page).toHaveURL(/\/vi\/$/);
  await expect(overlay).toBeVisible();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('section#experience')).toBeVisible();
  await expect(dialog.locator('[data-network-dialog-path]')).toHaveText(
    '$ view --section // kinh nghiệm',
  );
});

test('switching language from the full page stays on the full page', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  await overlay.locator('[data-network-skip]').click();
  await expect(overlay).toBeHidden();
  await chooseLanguage(page.locator('[data-language-context="page"]'), 'de');

  await expect(page).toHaveURL(/\/de\/$/);
  await expect(overlay).toBeHidden();
  await expect(page.locator('#main')).toBeVisible();
});

test('Escape closes language menus before closing their network layer', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const networkSwitcher = overlay.locator('[data-language-context="network"]');
  await networkSwitcher.locator('summary').click();
  await page.keyboard.press('Escape');
  await expect(networkSwitcher).not.toHaveAttribute('open', '');
  await expect(overlay).toBeVisible();

  const dialog = page.locator('#network-section-dialog');
  await overlay.locator('[data-network-node="projects"]').click();
  const dialogSwitcher = dialog.locator('[data-language-context="dialog"]');
  await dialogSwitcher.locator('summary').click();
  await page.keyboard.press('Escape');
  await expect(dialogSwitcher).not.toHaveAttribute('open', '');
  await expect(dialog).toBeVisible();
});

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
