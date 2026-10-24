import { expect, test } from '@playwright/test';

for (const locale of [
  { path: '/', details: 'Technical details' },
  { path: '/de/', details: 'Technische Details' },
  { path: '/vi/', details: 'Chi tiết kỹ thuật' },
]) {
  test(`short copy keeps technical depth keyboard-accessible at ${locale.path}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(locale.path);
    await page.locator('[data-network-node="experience"]').click();
    const dialog = page.locator('#network-section-dialog');
    const role = dialog.locator('.experience-entry').first();
    await expect(role.locator('.experience-entry__bullets').first().locator('li')).toHaveCount(3);
    const detail = role.locator('details');
    await expect(detail).not.toHaveAttribute('open', '');
    await detail.getByText(locale.details, { exact: true }).focus();
    await page.keyboard.press('Enter');
    await expect(detail).toHaveAttribute('open', '');
    await expect(detail.getByText(/Builder/)).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();

    await page.locator('[data-network-node="projects"]').click();
    const project = dialog.locator('.project-card').first();
    await expect(project.locator('.project-card__description').first().locator('li')).toHaveCount(2);
    await expect(project.locator('.project-card__tech').first().locator('li')).toHaveCount(4);
    await expect(project.locator('.project-card__description').first().locator('strong').first()).toBeVisible();
    await expect(dialog.locator('.project-card').nth(1).locator('.project-card__role-note em')).toContainText('Claude Code');
    const link = project.locator('.project-card__links a').first();
    expect(await link.evaluate(el => getComputedStyle(el).textDecorationLine)).toContain('underline');
    await project.locator('summary').focus();
    await page.keyboard.press('Enter');
    await expect(project.locator('details')).toHaveAttribute('open', '');
    await expect(project.locator('details .project-card__tech')).toBeVisible();
  });
}

test('German nouns are capitalized throughout the network and section navigation', async ({ page }) => {
  await page.goto('/de/');
  const labels = ['Profil', 'Fähigkeiten', 'Berufserfahrung', 'Ausbildung', 'Projekte', 'Zertifikate', 'Sprachen', 'Hobbys'];
  for (const [i, id] of ['intro', 'skills', 'experience', 'education', 'projects', 'certificates', 'languages', 'hobbies'].entries()) {
    const node = page.locator(`[data-network-node="${id}"]`);
    await expect(node).toHaveAttribute('data-network-label', labels[i]);
    await expect(page.locator(`[data-nav-link][data-target="${id}"]`)).toHaveAttribute('aria-label', labels[i]);
  }
  await page.locator('[data-network-assistant]').click();
  await expect(page.locator('.assistant-call__meter-label').last()).toHaveText('Assistent');
});

test('exported assistant data retains technical depth, authorship, and work-location conditions', async ({ request }) => {
  const response = await request.get('/data/bio-en.json');
  expect(response.ok()).toBe(true);
  const bio = await response.json();
  expect(bio.fingerprint).toMatch(/^[a-f0-9]{64}$/);
  expect(bio.experience.entries[0].bullets.join(' ')).toContain('Factory Method');
  expect(bio.projects.entries[1].description.join(' ')).toContain('Claude Code');
  expect(bio.projects.entries[0].description.join(' ')).toContain('90-day log deletion');
  expect(bio.workLocation.remote.vietnam.requiresFurtherDiscussion).toBe(true);
  expect(bio.workLocation.remote.vietnam.automatic).toBe(false);
});
