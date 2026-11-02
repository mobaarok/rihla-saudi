import type { ReactNode } from 'react';
import { patternBg } from '@/lib/style';

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  colors = ['#17633f', '#a9511f'],
}: {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  colors?: [string, string];
}) {
  return (
    <section
      className="text-white"
      style={patternBg(colors[0], colors[1], 135)}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {eyebrow && <div className="mb-3 text-sm font-medium text-white/80">{eyebrow}</div>}
        <h1 className="font-display text-3xl font-semibold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
