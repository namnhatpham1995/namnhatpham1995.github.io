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
// happen (e.g. a test that never starts a call).
function mockVoiceSocket(page: Page): { registered: Promise<void>; route: Promise<WebSocketRoute> } {
  let resolveRoute!: (ws: WebSocketRoute) => void;
  const route = new Promise<WebSocketRoute>((resolve) => {
    resolveRoute = resolve;
  });
  const registered = page.routeWebSocket(/\/ws\/voice/, resolveRoute);
  return { registered, route };
}

async function openCallScreen(page: Page) {
  await page.goto('/');
  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');
  await dialog.locator('[data-assistant-voice-toggle]').click();
  return dialog;
}

async function startCall(page: Page) {
  const dialog = await openCallScreen(page);
  await dialog.locator('[data-call-start]').click();
  return dialog;
}

test('the call-to-action names the session limit before the call screen is opened', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  await page.goto('/');

  await page.locator('[data-network-assistant]').click();
  const dialog = page.locator('#assistant-dialog');

  await expect(dialog.locator('[data-assistant-voice-toggle]')).toBeEnabled();
  await expect(dialog.locator('[data-assistant-voice-note]')).toHaveText('Call the assistant');
  await expect(dialog.getByText('10 min limit · shared daily cap')).toBeVisible();
});

test('the call screen discloses the limits and the AI before touching the microphone', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const dialog = await openCallScreen(page);

  // Still on the pre-call screen: nothing is live until "start call".
  await expect(dialog.locator('[data-call-pre]')).toBeVisible();
  await expect(dialog.locator('[data-call-live]')).toBeHidden();
  await expect(dialog.getByText("You'll be talking to an AI assistant, not to Nam.")).toBeVisible();
  await expect(
    dialog.getByText('Voice sessions are limited to 10 minutes and share a daily cap across all visitors.')
  ).toBeVisible();
  await expect(dialog.locator('[data-call-start]')).toBeVisible();
});

test('starting a call connects and shows the live meters and countdown', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const dialog = await startCall(page);

  await expect(dialog.locator('[data-call-live]')).toBeVisible();
  await expect(dialog.locator('[data-call-pre]')).toBeHidden();
  await expect(dialog.locator('[data-call-timer]')).toBeVisible();
  await expect(dialog.locator('[data-call-status]')).toHaveText('Listening — speak now.');
  await expect(dialog.locator('[data-call-meter="user"]')).not.toBeEmpty();
});

test('ending a call returns to the pre-call screen', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const dialog = await startCall(page);
  await expect(dialog.locator('[data-call-live]')).toBeVisible();

  await dialog.locator('[data-call-end]').click();

  await expect(dialog.locator('[data-call-pre]')).toBeVisible();
  await expect(dialog.locator('[data-call-timer]')).toBeHidden();
});

test('back to chat leaves call mode without starting a session', async ({ page }) => {
  await mockVoiceSocket(page).registered;
  const dialog = await openCallScreen(page);

  await dialog.locator('[data-call-back]').click();

  await expect(dialog.locator('[data-assistant-chat]')).toBeVisible();
  await expect(dialog.locator('[data-assistant-call]')).toBeHidden();
  await expect(dialog.locator('[data-assistant-cta]')).toBeVisible();
});

test('a 4429 close from the backend shows the quota-reached message', async ({ page }) => {
  const { registered, route } = mockVoiceSocket(page);
  await registered;
  const dialog = await startCall(page);
  await expect(dialog.locator('[data-call-live]')).toBeVisible();

  await (await route).close({ code: 4429 });

  await expect(dialog.locator('[data-call-message]')).toHaveText(
    'Voice quota reached for today — try again tomorrow, or keep chatting here.'
  );
  await expect(dialog.locator('[data-call-pre]')).toBeVisible();
});

test('a 4408 close from the backend shows the session-ended message', async ({ page }) => {
  const { registered, route } = mockVoiceSocket(page);
  await registered;
  const dialog = await startCall(page);
  await expect(dialog.locator('[data-call-live]')).toBeVisible();

  await (await route).close({ code: 4408 });

  await expect(dialog.locator('[data-call-message]')).toHaveText(
    'Voice session ended. Start a new one anytime.'
  );
  await expect(dialog.locator('[data-call-pre]')).toBeVisible();
});

test('a turn that completes with no transcription-finished flag does not merge into the next turn', async ({ page }) => {
  const { registered, route } = mockVoiceSocket(page);
  await registered;
  const dialog = await startCall(page);
  await expect(dialog.locator('[data-call-live]')).toBeVisible();
  const ws = await route;

  // Simulates the backend's greeting retry (voice_greeting.py): a turn whose
  // transcript arrives but which completes without ever setting
  // outputTranscription.finished, followed by a retried turn with the same
  // text. Before this fix, the missing `finished` left the transcript line
  // open so the retry's text appended onto it instead of starting a new line.
  ws.send(JSON.stringify({ outputTranscription: { text: 'Hi there', finished: false } }));
  ws.send(JSON.stringify({ turnComplete: true }));
  ws.send(JSON.stringify({ outputTranscription: { text: 'Hi there', finished: true } }));
  ws.send(JSON.stringify({ turnComplete: true }));

  const lines = dialog.locator('.assistant-call__line--assistant .assistant-call__line-body');
  await expect(lines).toHaveCount(2);
  await expect(lines.nth(0)).toHaveText('Hi there');
  await expect(lines.nth(1)).toHaveText('Hi there');
});

test('denying microphone access shows the mic-denied message', async ({ page }) => {
  await page.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = () =>
      Promise.reject(new DOMException('Permission denied', 'NotAllowedError'));
  });
  await mockVoiceSocket(page).registered;
  const dialog = await startCall(page);

  await expect(dialog.locator('[data-call-message]')).toHaveText(
    'Microphone access was denied — allow access in your browser settings to use voice mode.'
  );
  await expect(dialog.locator('[data-call-pre]')).toBeVisible();
});
