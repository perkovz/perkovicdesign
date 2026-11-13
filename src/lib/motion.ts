// Shared motion constants for the v3 "Beautiful world" spec (Figma Motion & States, node 23:20).

export const VINE_DRAW_MS = 1400;

/** Cubic bezier ease-in-out (0.42, 0, 0.58, 1), the CSS `ease-in-out` keyword. */
const P1X = 0.42;
const P2X = 0.58;
const P1Y = 0;
const P2Y = 1;

function bez(a: number, b: number, s: number) {
  const m = 1 - s;
  return 3 * m * m * s * a + 3 * m * s * s * b + s * s * s;
}

/**
 * Time fraction (0..1) at which an `ease-in-out` stroke draw reaches `progress` of the path.
 * Used to fire vine nodes, labels and leaves exactly as the stroke passes them.
 */
export function easeInOutTimeAt(progress: number): number {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;
  // Find s where y(s) = progress, then return x(s).
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (bez(P1Y, P2Y, mid) < progress) lo = mid;
    else hi = mid;
  }
  return bez(P1X, P2X, (lo + hi) / 2);
}

/** Delay in ms for something that should appear when the vine stroke reaches `progress`. */
export function vineDelayMs(progress: number): number {
  return Math.round(easeInOutTimeAt(progress) * VINE_DRAW_MS);
}

/** Stagger delay for scroll reveals: only the first 4 siblings stagger, the rest arrive with the 4th. */
export function staggerMs(index: number, step = 70): number {
  return Math.min(index, 3) * step;
}
