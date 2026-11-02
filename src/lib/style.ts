import type { CSSProperties } from 'react';

/** A colour gradient with a subtle dotted pattern on top. */
export function patternBg(a: string, b: string, angle = 150): CSSProperties {
  const dot = 'rgb(255 255 255 / 0.12)';
  return {
    backgroundColor: a,
    backgroundImage: [
      `radial-gradient(circle at 25% 25%, ${dot} 2px, transparent 2.5px)`,
      `radial-gradient(circle at 75% 75%, ${dot} 2px, transparent 2.5px)`,
      `linear-gradient(${angle}deg, ${a}, ${b})`,
    ].join(', '),
    backgroundSize: '28px 28px, 28px 28px, 100% 100%',
  };
}
