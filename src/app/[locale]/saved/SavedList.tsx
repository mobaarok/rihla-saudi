'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { useUser } from '@/components/UserProvider';

export default function SavedList({ cards }: { cards: { slug: string; card: ReactNode }[] }) {
  const tr = useTranslations('saved');
  const { lists, authReady } = useUser();
  if (!authReady) return null;
  const shown = cards.filter((c) => lists.saved.includes(c.slug));
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      {shown.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sand-300 p-10 text-center text-muted">{tr('empty')}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <div key={c.slug}>{c.card}</div>
          ))}
        </div>
      )}
    </div>
  );
}
