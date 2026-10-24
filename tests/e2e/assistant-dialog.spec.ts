import { expect, test, type Page } from '@playwright/test';

async function mockChatResponse(page: Page, body: string) {
  await page.route('**/chat', async (route) => {
    await route.fulfill({ status: 200, contentType: 'text/plain', body });
  });
}

test('ask my assistant opens the chat dialog on top of the still-open network overlay', async ({ page }) => {
  await page.goto('/');

  const overlay = page.locator('#network-intro');
  const dialog = page.locator('#assistant-dialog');
  const trigger = overlay.locator('[data-network-assistant]');
  await expect(overlay).toBeVisible();

  await trigger.click();
  await expect(overlay).toBeVisible();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Conversations are saved for quality review')).toBeVisible();

  await dialog.locator('[data-assistant-dialog-close]').click();
  await expect(dialog).toBeHidden();
  await expect(overlay).toBeVisible();
  await expect(trigger).toBeFocused();
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
  // The dialog opens with a greeting bubble, so the reply is the *last*
  // assistant message rather than the only one.
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText(
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
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('Two weeks.');
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

test('voice mode stays disabled for Vietnamese regardless of backend availability', async ({ page }) => {
  await page.goto('/vi/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const voiceToggle = dialog.locator('[data-assistant-voice-toggle]');

  await expect(voiceToggle).toBeDisabled();
  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText(
    'Trợ lý giọng nói trực tiếp chỉ hỗ trợ tiếng Anh và tiếng Đức — hãy tiếp tục trò chuyện bằng văn bản ở đây.'
  );
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

test('the session language picker shows the page locale and locks once a message is sent', async ({ page }) => {
  await mockChatResponse(page, 'Zwei Wochen.');
  await page.goto('/de/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const picker = dialog.locator('[data-assistant-language]');

  await expect(picker.locator('.language-switcher [aria-current="true"]')).toHaveAttribute(
    'aria-label',
    'Deutsch'
  );
  await expect(picker.locator('[data-assistant-language-locked]')).toBeHidden();

  await dialog.locator('[data-assistant-input]').fill('Wie lang ist die Kündigungsfrist?');
  await dialog.locator('[data-assistant-form]').getByRole('button', { name: 'Senden' }).click();

  await expect(picker.locator('[data-assistant-language-locked]')).toBeVisible();
  await expect(picker.locator('.language-switcher')).toBeHidden();
});

test('chat history survives in-site navigation and starts fresh in a new tab context', async ({ page }) => {
  await mockChatResponse(page, 'Two weeks.');
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  let dialog = page.locator('#assistant-dialog');
  await dialog.locator('[data-assistant-input]').fill("What's the notice period?");
  await dialog.locator('[data-assistant-form]').getByRole('button', { name: 'Send' }).click();
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('Two weeks.');
  await dialog.locator('[data-assistant-dialog-close]').click();

  await page.goto('/');
  await page.locator('[data-network-assistant]').click();
  dialog = page.locator('#assistant-dialog');
  await expect(dialog.locator('.assistant-dialog__message--user')).toHaveText("What's the notice period?");
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('Two weeks.');
  // A restored session already has an exchange in it, so the chips (a
  // blank-session affordance) should not reappear.
  await expect(dialog.locator('[data-assistant-chips]')).toBeHidden();
});

test('the identity prompt appears after a couple of exchanges and skipping dismisses it for the session', async ({
  page,
}) => {
  let replyCount = 0;
  await page.route('**/chat', async (route) => {
    replyCount += 1;
    await route.fulfill({ status: 200, contentType: 'text/plain', body: `reply ${replyCount}` });
  });
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const input = dialog.locator('[data-assistant-input]');
  const send = dialog.locator('[data-assistant-form]').getByRole('button', { name: 'Send' });

  await input.fill('first question');
  await send.click();
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('reply 1');
  await expect(dialog.locator('.assistant-dialog__identity')).toHaveCount(0);

  await input.fill('second question');
  await send.click();
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('reply 2');
  const identityPrompt = dialog.locator('.assistant-dialog__identity');
  await expect(identityPrompt).toBeVisible();

  // Skipping never blocks the conversation and never reappears this session.
  await identityPrompt.getByRole('button', { name: 'Skip' }).click();
  await expect(identityPrompt).toHaveCount(0);
  await expect(input).toBeEnabled();

  await input.fill('third question');
  await send.click();
  await expect(dialog.locator('.assistant-dialog__message--assistant').last()).toHaveText('reply 3');
  await expect(dialog.locator('.assistant-dialog__identity')).toHaveCount(0);
});

test('the assistant greets the visitor as soon as the dialog opens', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-network-assistant]').click();

  const dialog = page.locator('#assistant-dialog');
  const greeting = dialog.locator('.assistant-dialog__message--assistant').first();

  await expect(greeting).toBeVisible();
  await expect(greeting).toHaveText(
    "Hi — I'm Nam's assistant. Ask me about his work, experience, or availability and I'll share what I know."
  );
});
