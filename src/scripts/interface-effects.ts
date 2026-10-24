/** Short, event-driven effects; no idle animation loop or audio side effects. */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function revealWindowContent(container: Element): Animation[] {
  if (reducedMotion.matches) return [];
  return Array.from(container.children).slice(0, 8).map((child, index) =>
    child.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 260, delay: 80 + index * 24, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' },
    ),
  );
}

export function activateNetworkNode(node: HTMLElement): void {
  if (reducedMotion.matches) return;
  const face = node.querySelector<HTMLElement>('.network-intro__node-circle, img');
  face?.animate(
    [
      { scale: 1, filter: 'brightness(1)' },
      { scale: .94, filter: 'brightness(1.5)', offset: .18 },
      { scale: 1.12, filter: 'brightness(1.2)', offset: .55 },
      { scale: 1, filter: 'brightness(1)' },
    ],
    { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' },
  );
  const stage = node.closest<HTMLElement>('.network-intro__stage');
  if (!stage) return;
  // offsetLeft/Top are the orb's centre in the existing map's coordinate system.
  const signal = document.createElement('span');
  signal.className = 'network-signal';
  signal.setAttribute('aria-hidden', 'true');
  signal.style.left = `${node.offsetLeft}px`;
  signal.style.top = `${node.offsetTop}px`;
  stage.append(signal);
  const animation = signal.animate(
    [{ transform: 'translate(-50%, -50%) scale(.4)', opacity: .8 },
      { transform: 'translate(-50%, -50%) scale(2.5)', opacity: 0 }],
    { duration: 580, easing: 'ease-out' },
  );
  void animation.finished.catch(() => {}).finally(() => signal.remove());
}

// Press feedback stays on the control itself, preserving its hit target and focus.
const presses = new WeakMap<HTMLElement, Animation>();
function pressFeedback(control: HTMLElement): void {
  if (reducedMotion.matches || control.matches(':disabled, [aria-disabled="true"]')) return;
  presses.get(control)?.cancel();
  const animation = control.animate(
    [{ outline: '1px solid transparent', outlineOffset: '0px' },
      { outline: '1px solid #d4b879', outlineOffset: '3px', offset: .25 },
      { outline: '1px solid transparent', outlineOffset: '8px' }],
    { duration: 360, easing: 'ease-out' },
  );
  presses.set(control, animation);
}
function findControl(target: EventTarget | null): HTMLElement | null {
  return target instanceof Element
    ? target.closest<HTMLElement>('button, a, summary') : null;
}
document.addEventListener('pointerdown', event => {
  const control = findControl(event.target);
  if (control && !control.closest('[data-network-node]')) pressFeedback(control);
});
document.addEventListener('click', event => {
  // Native keyboard activation dispatches a click with detail zero.
  const control = findControl(event.target);
  if (event.detail === 0 && control && !control.closest('[data-network-node]')) pressFeedback(control);
});

reducedMotion.addEventListener('change', event => {
  if (!event.matches) return;
  document.querySelectorAll('.network-signal').forEach(signal => signal.remove());
});
