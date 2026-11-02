'use client';

import { Suspense, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SearchBox from '@/components/SearchBox';
import { matches } from '@/lib/search';

type Props = {
  places: { slug: string; text: string; card: ReactNode }[];
  regions: { slug: string; text: string; name: string }[];
};

export default function SearchView(props: Props) {
  return (
    <Suspense fallback={null}>
      <Inner {...props} />
    </Suspense>
  );
}

function Inner({ places, regions }: Props) {
  const tr = useTranslations('search');
  const params = useSearchParams();
  const initial = params.get('q') ?? '';
  const [q, setQ] = useState(initial);
  useEffect(() => setQ(initial), [initial]);

  const foundPlaces = useMemo(() => places.filter((p) => matches(p.text, q)), [places, q]);
  const foundRegions = useMemo(() => regions.filter((r) => matches(r.text, q)), [regions, q]);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8">
      <div className="max-w-xl">
        <SearchBox key={initial} initial={initial} onChange={setQ} autoFocus />
      </div>

      {q.trim() && (
        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {tr('results', { count: foundPlaces.length + foundRegions.length })}
        </p>
      )}

      {foundRegions.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {foundRegions.map((r) => (
            <Link
              key={r.slug}
              href={`/regions/${r.slug}`}
              className="rounded-full bg-palm-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-palm-700"
            >
              {tr('region')}: {r.name}
            </Link>
          ))}
        </div>
      )}

      {q.trim() && foundPlaces.length === 0 && foundRegions.length === 0 && (
        <p className="mt-10 rounded-2xl border border-dashed border-sand-300 p-10 text-center text-muted">{tr('none')}</p>
      )}

      {foundPlaces.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundPlaces.map((p) => (
            <div key={p.slug}>{p.card}</div>
          ))}
        </div>
      )}

      {!q.trim() && <p className="mt-6 text-muted">{tr('hint')}</p>}
    </div>
  );
}
