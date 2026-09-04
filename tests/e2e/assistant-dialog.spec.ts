import { expect, test, type Page } from '@playwright/test';

async function mockChatResponse(page: Page, body: string) {
  await page.route('**/chat', async (route) => {
    await route.fulfill({ status: 200, contentType: 'text/plain', body });
  });
}

test('ask my assistant closes the network overlay and opens the chat dialog', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#assistant-dialog');
  const trigger = overlay.locator('[data-network-assistant]');
  await expect(overlay).toBeVisible();

  await trigger.click();
  await expect(overlay).toBeHidden();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Conversations are saved for quality review')).toBeVisible();

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

test('typing a message sends it and renders the streamed reply', async ({ page }) => {
  await mockChatResponse(page, 'Nam mostly works in Java and Spring Boot.');
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  await dialog.locator('[data-assistant-input]').fill('What frameworks does Nam use?');
  await dialog.locator('[data-assistant-form]').getByRole('button', { name: 'Send' }).click();

  await expect(dialog.locator('.assistant-dialog__message--user')).toHaveText('What frameworks does Nam use?');
  await expect(dialog.locator('.assistant-dialog__message--assistant')).toHaveText(
    'Nam mostly works in Java and Spring Boot.'
  );
  await expect(dialog.locator('[data-assistant-chips]')).toBeHidden();
});

test('selecting a suggested question sends it immediately', async ({ page }) => {
  await mockChatResponse(page, 'Two weeks.');
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const chip = dialog.locator('[data-assistant-chip]').first();
  const questionText = await chip.textContent();
  await chip.click();

  await expect(dialog.locator('.assistant-dialog__message--user')).toHaveText(questionText ?? '');
  await expect(dialog.locator('.assistant-dialog__message--assistant')).toHaveText('Two weeks.');
});

test('a failed request shows an inline error instead of breaking the widget', async ({ page }) => {
  await page.route('**/chat', async (route) => {
    await route.fulfill({ status: 500, contentType: 'text/plain', body: 'error' });
  });
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  await dialog.locator('[data-assistant-input]').fill('hello');
  await dialog.locator('[data-assistant-form]').getByRole('button', { name: 'Send' }).click();

  await expect(dialog.locator('.assistant-dialog__message--error')).toBeVisible();
  await expect(dialog.locator('[data-assistant-input]')).toBeEnabled();
});

const localeCases = [
  { path: '/', button: 'ask --assistant', placeholder: 'Type a message…' },
  { path: '/de/', button: 'ask --assistant // KI-Assistent', placeholder: 'Nachricht eingeben…' },
  { path: '/vi/', button: 'ask --assistant // Trợ lý AI', placeholder: 'Nhập tin nhắn…' },
];

for (const localeCase of localeCases) {
  test(`assistant entry point is localized for ${localeCase.path}`, async ({ page }) => {
    await page.goto(localeCase.path);

    const trigger = page.locator('[data-network-assistant]');
    await expect(trigger).toContainText(localeCase.button);

    await trigger.click();
    await expect(page.locator('#assistant-dialog [data-assistant-input]')).toHaveAttribute(
      'placeholder',
      localeCase.placeholder
    );
  });
}
