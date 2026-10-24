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

test('typewriter waits until the network overlay closes', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const typewriter = page.locator('[data-typewriter]');
  const text = typewriter.locator('.typewriter__text');
  const fullText = await typewriter.getAttribute('data-text');
  expect(fullText).toBeTruthy();

  await expect(overlay).toBeVisible();
  await expect(text).toHaveText(fullText!);

  await overlay.locator('[data-network-skip]').click();
  await expect(overlay).toBeHidden({ timeout: 1_000 });
  await expect
    .poll(() => text.textContent().then((value) => value?.length ?? 0))
    .toBeLessThan(fullText!.length);
});

test('summary emphasizes the strongest CV proof points in every language', async ({ page }) => {
  const summaries = [
    {
      path: '/',
      highlights: ['5+ years', 'Java/Spring Boot', 'B2B', 'microservice-deployer', 'CI/CD automation'],
    },
    {
      path: '/de/',
      highlights: ['über 5 Jahren', 'Java/Spring-Boot', 'microservice-deployer', 'CI/CD-Automatisierung'],
    },
    {
      path: '/vi/',
      highlights: ['hơn 5 năm', 'Java/Spring Boot', 'microservice-deployer', 'tự động hóa CI/CD'],
    },
  ];

  for (const summary of summaries) {
    await page.goto(summary.path);

    const strongPoints = page.locator('[data-typewriter] strong');
    await expect(strongPoints).toHaveCount(summary.highlights.length);
    await expect(strongPoints).toHaveText(summary.highlights);
  }
});

test('view full page control stays centered without overlapping the network', async ({ page }) => {
  const viewports = [
    { width: 1280, height: 720 },
    { width: 390, height: 844 },
    { width: 375, height: 667 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/');

    const overlay = page.locator('#network-intro');
    const control = overlay.locator('[data-network-skip]');
    await expect(control).toBeVisible();

    await expect
      .poll(() =>
        control.evaluate((element) => {
          const rect = element.getBoundingClientRect();
          return Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);
        }),
      )
      .toBeLessThanOrEqual(1);

    const layout = await overlay.evaluate((element) => {
      const controlRect = element.querySelector('[data-network-skip]')!.getBoundingClientRect();
      const lowerNodeBottom = Math.max(
        ...['projects', 'certificates'].map((id) =>
          element.querySelector(`[data-network-node="${id}"]`)!.getBoundingClientRect().bottom,
        ),
      );
      return {
        animationName: getComputedStyle(element.querySelector('[data-network-skip]')!).animationName,
        controlTop: controlRect.top,
        lowerNodeBottom,
        overflowsHorizontally: document.documentElement.scrollWidth > window.innerWidth,
      };
    });

    expect(layout.animationName).toBe('network-skip-in');
    expect(layout.controlTop).toBeGreaterThan(layout.lowerNodeBottom);
    expect(layout.overflowsHorizontally).toBe(false);
  }
});

test('nodes stay clear of each other and the overlay controls on cramped screens', async ({ page }) => {
  // Reduced motion lays the overlay out in its final state straight away.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  // The tightest fits: a narrow phone with a long wrapped hint, landscape phones
  // with long German button labels.
  for (const [path, width, height] of [
    ['/vi/', 320, 568],
    ['/de/', 568, 320],
    ['/de/', 844, 340],
  ] as const) {
    await page.setViewportSize({ width, height });
    await page.goto(path);

    const problems = await page.locator('#network-intro').evaluate((overlay) => {
      const boxes = Array.from(
        overlay.querySelectorAll<HTMLElement>(
          '[data-network-node], .network-intro__prompt, .network-intro__language, .network-intro__actions',
        ),
      ).map((element) => [element.dataset.networkNode ?? element.classList[0], element.getBoundingClientRect()] as const);
      const found: string[] = [];
      for (const [name, box] of boxes) {
        if (box.left < 0 || box.top < 0 || box.right > innerWidth || box.bottom > innerHeight) found.push(`${name} clipped`);
      }
      boxes.forEach(([a, boxA], i) => {
        for (const [b, boxB] of boxes.slice(i + 1)) {
          const overlapX = Math.min(boxA.right, boxB.right) - Math.max(boxA.left, boxB.left);
          const overlapY = Math.min(boxA.bottom, boxB.bottom) - Math.max(boxA.top, boxB.top);
          if (overlapX > 1 && overlapY > 1) found.push(`${a} overlaps ${b}`);
        }
      });
      return found;
    });
    expect(problems, `${path} at ${width}x${height}`).toEqual([]);
  }
});

test('circuit connections reach every node with solid angular traces', async ({ page }) => {
  await page.goto('/');

  const links = page.locator('[data-network-link]');
  await expect
    .poll(() => links.evaluateAll((paths) => paths.every((path) => /^M.+L.+L.+L.+/.test(path.getAttribute('d') ?? ''))))
    .toBe(true);

  const endpoints = await links.evaluateAll((paths) =>
    paths.map((path) => [path.getAttribute('data-from'), path.getAttribute('data-to')]),
  );
  const linked = new Set(endpoints.flat());
  for (const sectionId of sectionIds) expect(linked.has(sectionId)).toBe(true);
  // A constellation, not a hub with spokes: some links skip the centre entirely.
  expect(endpoints.some((pair) => !pair.includes('intro'))).toBe(true);

  const baseDash = await page
    .locator('[data-network-link][data-from="intro"][data-to="skills"]')
    .evaluate((element) => getComputedStyle(element).strokeDasharray);
  expect(baseDash).toBe('none');
});

test('links start and end on the orbs they join', async ({ page }) => {
  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    // Let the entry animations settle so the rendered orbs are at rest.
    await page.waitForTimeout(1_200);

    const gaps = await page.evaluate(() =>
      Array.from(document.querySelectorAll<SVGPathElement>('[data-network-link]')).flatMap((path) => {
        const length = path.getTotalLength();
        const matrix = path.getScreenCTM()!;
        return [
          [path.dataset.from!, path.getPointAtLength(0)],
          [path.dataset.to!, path.getPointAtLength(length)],
        ].map(([id, point]) => {
          const { x, y } = (point as DOMPoint).matrixTransform(matrix);
          const orb = document.querySelector(
            `[data-network-node="${id}"] :is(.network-intro__node-circle, img)`,
          )!.getBoundingClientRect();
          return Math.hypot(x - (orb.left + orb.width / 2), y - (orb.top + orb.height / 2));
        });
      }),
    );
    for (const gap of gaps) expect(gap).toBeLessThan(2);
  }
});

test('hover, focus, and touch light up the selected node and its neighbours', async ({ page }) => {
  await page.goto('/');

  const stage = page.locator('.network-intro__stage');
  const projectsNode = page.locator('[data-network-node="projects"]');
  const projectsLinks = page.locator('[data-network-link]:is([data-from="projects"], [data-to="projects"])');
  const firstProjectsLink = projectsLinks.first();
  const unrelatedLink = page.locator('[data-network-link][data-from="education"][data-to="languages"]');

  await projectsNode.hover();
  await expect(stage).toHaveAttribute('data-connection-active', '');
  await expect(projectsNode).toHaveAttribute('data-connected', '');
  // Hovered ports must stay still instead of drifting away from the pointer.
  const position = await projectsNode.evaluate(el => el.style.translate);
  await page.waitForTimeout(350);
  expect(await projectsNode.evaluate(el => el.style.translate)).toBe(position);
  await expect(projectsLinks).toHaveCount(2);
  for (const link of await projectsLinks.all()) await expect(link).toHaveAttribute('data-active', '');
  await expect(unrelatedLink).not.toHaveAttribute('data-active', '');
  await expect(page.locator('[data-network-node="experience"]')).toHaveAttribute('data-near', '');
  await expect(page.locator('[data-network-node="skills"]')).toHaveAttribute('data-near', '');
  await expect(page.locator('[data-network-node="languages"]')).not.toHaveAttribute('data-near', '');
  await expect
    .poll(() => firstProjectsLink.evaluate((element) => getComputedStyle(element.parentElement!.querySelector('[data-network-trace-signal]')!).animationName))
    .toBe('network-signal-flow');

  await page.mouse.move(1, 1);
  await expect(firstProjectsLink).not.toHaveAttribute('data-active', '');
  await expect(page.locator('[data-network-node][data-near]')).toHaveCount(0);

  await projectsNode.focus();
  await expect(firstProjectsLink).toHaveAttribute('data-active', '');
  await page.locator('[data-network-skip]').focus();
  await expect(firstProjectsLink).not.toHaveAttribute('data-active', '');

  await projectsNode.dispatchEvent('pointerdown', { pointerType: 'touch' });
  await expect(firstProjectsLink).toHaveAttribute('data-active', '');
  await projectsNode.dispatchEvent('pointerup', { pointerType: 'touch' });
  await expect(firstProjectsLink).not.toHaveAttribute('data-active', '');
});

test('mouse parallax drifts the nodes and then stops', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('/');

  const node = page.locator('[data-network-node="experience"]');
  await page.mouse.move(1200, 650);
  await expect.poll(() => node.evaluate((element) => element.style.translate)).not.toBe('');

  // Once the scene catches up with a still pointer, the frame loop goes quiet.
  await expect
    .poll(
      () =>
        node.evaluate(async (element) => {
          const before = element.style.translate;
          await new Promise((resolve) => setTimeout(resolve, 250));
          return element.style.translate === before;
        }),
      { timeout: 3_000 },
    )
    .toBe(true);
});

test('reduced motion keeps a static highlighted connection', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const node = page.locator('[data-network-node="experience"]');
  const link = page.locator('[data-network-link][data-from="intro"][data-to="experience"]');
  await node.hover();
  await expect(link).toHaveAttribute('data-active', '');

  const styles = await link.evaluate((element) => ({
    linkOpacity: getComputedStyle(element).opacity,
    linkAnimation: getComputedStyle(element).animationName,
    linkDash: getComputedStyle(element).strokeDasharray,
    starsAnimation: getComputedStyle(document.querySelector('.network-intro__spark')!).animationName,
    pulseAnimation: getComputedStyle(
      document.querySelector('.network-intro__center-ring')!,
    ).animationName,
    nodeTranslate: (document.querySelector('[data-network-node="experience"]') as HTMLElement).style.translate,
  }));
  expect(styles.linkOpacity).toBe('1');
  expect(styles.linkAnimation).toBe('none');
  expect(styles.linkDash).toBe('none');
  expect(styles.starsAnimation).toBe('none');
  expect(styles.pulseAnimation).toBe('none');
  expect(styles.nodeTranslate).toBe('');
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

test('desktop menu gives a strong helper without moving the main content', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-network-skip]').click();

  const main = page.locator('#main');
  const mapButton = page.locator('[data-open-network]');
  const tooltip = mapButton.locator('[role="tooltip"]');
  const mainBefore = await main.boundingBox();

  await mapButton.hover();

  await expect(tooltip).toBeVisible();
  await expect(tooltip).toHaveText('Open network map');
  await expect
    .poll(() =>
      mapButton.evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          background: style.backgroundColor,
          border: style.borderColor,
          shadow: style.boxShadow,
        };
      }),
    )
    .not.toEqual({
      background: 'rgba(0, 0, 0, 0)',
      border: 'rgba(0, 0, 0, 0)',
      shadow: 'none',
    });
  const mainAfter = await main.boundingBox();
  expect(mainAfter?.x).toBe(mainBefore?.x);
  expect(mainAfter?.width).toBe(mainBefore?.width);
});

test('mobile long press shows helper above the compact menu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('[data-network-skip]').click();
  await expect(page.locator('#network-intro')).toBeHidden();

  const mapButton = page.locator('[data-open-network]');
  const touchTooltip = page.locator('[data-nav-touch-tooltip]');
  const mainBefore = await page.locator('#main').boundingBox();

  await mapButton.dispatchEvent('pointerdown', {
    pointerType: 'touch',
    clientX: 24,
    clientY: 820,
  });
  await expect(touchTooltip).toBeVisible({ timeout: 750 });
  await expect(touchTooltip).toHaveText('Open network map');
  await expect(mapButton).toHaveAttribute('data-help-active', '');

  await mapButton.dispatchEvent('pointerup', {
    pointerType: 'touch',
    clientX: 24,
    clientY: 820,
  });
  const mainAfter = await page.locator('#main').boundingBox();
  expect(mainAfter?.x).toBe(mainBefore?.x);
  expect(mainAfter?.width).toBe(mainBefore?.width);

  // The synthetic click paired with the long press is ignored, while a later
  // deliberate tap keeps the button's normal action.
  await mapButton.dispatchEvent('click');
  await expect(page.locator('#network-intro')).toBeHidden();
  await page.waitForTimeout(350);
  await mapButton.click();
  await expect(page.locator('#network-intro')).toBeVisible();
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


test('circuit elbows and junctions stay aligned at desktop and phone sizes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const viewport of [{ width: 1280, height: 720 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect.poll(() => page.locator('[data-network-junction][cx]').count()).toBe(16);
    const issues = await page.locator('[data-network-trace]').evaluateAll(traces => traces.flatMap(trace => {
      const path = trace.querySelector('[data-network-link]')!;
      const coordinates = (path.getAttribute('d')!.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
      const points = Array.from({ length: coordinates.length / 2 }, (_, i) => [coordinates[i * 2], coordinates[i * 2 + 1]]);
      const errors: string[] = [];
      for (let i = 1; i < points.length; i++) {
        const dx = Math.abs(points[i][0] - points[i - 1][0]);
        const dy = Math.abs(points[i][1] - points[i - 1][1]);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (Math.min(...[0, 30, 90].map(expected => Math.abs(expected - angle))) > .6) errors.push(`Unexpected trace angle ${angle}`);
      }
      trace.querySelectorAll('[data-network-junction]').forEach((junction, i) => {
        if (Math.hypot(Number(junction.getAttribute('cx')) - points[i + 1][0], Number(junction.getAttribute('cy')) - points[i + 1][1]) > .2) errors.push('Detached junction');
      });
      return errors;
    }));
    expect(issues).toEqual([]);
  }
});
