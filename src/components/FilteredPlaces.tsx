'use client';

import { useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import type { Category } from '@/data/types';

// Category filter chips. The cards are rendered on the server and passed in,
// so the page stays fully indexable by search engines.
export default function FilteredPlaces({
  items,
}: {
  items: { slug: string; category: Category; card: ReactNode }[];
}) {
  const tr = useTranslations('category');
  const [active, setActive] = useState<Category | 'all'>('all');
  const present = Array.from(new Set(items.map((i) => i.category)));
  const shown = active === 'all' ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {present.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {(['all', ...present] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active === c ? 'border-palm-600 bg-palm-600 text-white' : 'border-sand-300 bg-white hover:bg-sand-100'
              }`}
            >
              {tr(c)}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((i) => (
          <div key={i.slug}>{i.card}</div>
        ))}
      </div>
    </div>
  );
}
