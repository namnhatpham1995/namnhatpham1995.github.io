import { expect, test, type Page, type WebSocketRoute } from '@playwright/test';

// PUBLIC_ASSISTANT_VOICE_URL is set to wss://example.invalid/ws/voice for
// this test build (see .github/workflows/deploy.yml's `test` job), so these
// mock the /ws/voice connection itself rather than a real backend -- per
// playwright's WebSocketRoute docs, not calling connectToServer() makes
// Playwright open the WebSocket in the page automatically, fully mocked.
//
// The route handler runs in the Node driver process and is notified over
// CDP, which can resolve *after* the page's own (auto-opened) mocked
// WebSocket already fired `onopen` -- so callers that need the route object
// must await `route` rather than reading a plain variable synchronously.
// `registered` and `route` are kept as separate promises (not one nested
// inside the other) deliberately: an async function that returns a promise
// has its own returned promise adopt that promise's state, so awaiting a
// single combined promise here would block on a connection that may never
// happen (e.g. a test that never starts voice mode).
function mockVoiceSocket(page: Page): { registered: Promise<void>; route: Promise<WebSocketRoute> } {
  let resolveRoute!: (ws: WebSocketRoute) => void;
  const route = new Promise<WebSocketRoute>((resolve) => {
    resolveRoute = resolve;
  });
  const registered = page.routeWebSocket(/\/ws\/voice/, resolveRoute);
  return { registered, route };
}

async function openDialogAndStartVoice(page: Page) {
  await page.goto('/');
  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const voiceToggle = dialog.locator('[data-assistant-voice-toggle]');
  await voiceToggle.click();
  return { dialog, voiceToggle };
}

test('the pre-start disclosure names the session limit and shared quota', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  const voiceToggle = dialog.locator('[data-assistant-voice-toggle]');

  await expect(voiceToggle).toBeEnabled();
  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText(
    'Voice sessions are limited to 10 minutes and share a daily cap across all visitors.'
  );
});

test('starting voice mode connects, captures the mic, and disables text chat', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const { dialog, voiceToggle } = await openDialogAndStartVoice(page);

  await expect(voiceToggle).toHaveText('stop --live');
  await expect(voiceToggle).toHaveAttribute('aria-pressed', 'true');
  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText('Listening — speak now.');
  await expect(dialog.locator('[data-assistant-input]')).toBeDisabled();
});

test('stopping a voice session releases the mic and re-enables text chat', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const { dialog, voiceToggle } = await openDialogAndStartVoice(page);
  await expect(voiceToggle).toHaveText('stop --live');

  await voiceToggle.click();

  await expect(voiceToggle).toHaveText('voice --live');
  await expect(voiceToggle).toHaveAttribute('aria-pressed', 'false');
  await expect(dialog.locator('[data-assistant-input]')).toBeEnabled();
});

test('a 4429 close from the backend shows the quota-reached message', async ({ page }) => {
  const { registered, route } = mockVoiceSocket(page);
  await registered;
  const { dialog, voiceToggle } = await openDialogAndStartVoice(page);
  await expect(voiceToggle).toHaveText('stop --live');

  await (await route).close({ code: 4429 });

  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText(
    'Voice quota reached for today — try again tomorrow, or keep chatting here.'
  );
  await expect(voiceToggle).toHaveText('voice --live');
});

test('a 4408 close from the backend shows the session-ended message', async ({ page }) => {
  const { registered, route } = mockVoiceSocket(page);
  await registered;
  const { dialog, voiceToggle } = await openDialogAndStartVoice(page);
  await expect(voiceToggle).toHaveText('stop --live');

  await (await route).close({ code: 4408 });

  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText(
    'Voice session ended. Start a new one anytime.'
  );
  await expect(voiceToggle).toHaveText('voice --live');
});

test('denying microphone access shows the mic-denied message', async ({ page }) => {
  await page.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = () =>
      Promise.reject(new DOMException('Permission denied', 'NotAllowedError'));
  });
  await mockVoiceSocket(page).registered;
  const { dialog, voiceToggle } = await openDialogAndStartVoice(page);

  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText(
    'Microphone access was denied — allow access in your browser settings to use voice mode.'
  );
  await expect(voiceToggle).toHaveText('voice --live');
});
