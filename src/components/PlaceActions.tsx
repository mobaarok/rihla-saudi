'use client';

import { useTranslations } from 'next-intl';
import { useUser } from './UserProvider';

export function SaveHeart({ slug, className = '' }: { slug: string; className?: string }) {
  const { has, toggle } = useUser();
  const tr = useTranslations('place');
  const saved = has('saved', slug);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle('saved', slug);
      }}
      aria-pressed={saved}
      aria-label={saved ? tr('saved') : tr('save')}
      className={`grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow transition hover:scale-110 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? '#c8662b' : 'none'} stroke={saved ? '#c8662b' : '#1f1a14'} strokeWidth="2">
        <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.2 5.2 3 1.6-1.8 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export function PlaceActionButtons({ slug }: { slug: string }) {
  const { has, toggle } = useUser();
  const tr = useTranslations('place');
  const saved = has('saved', slug);
  const visited = has('visitedPlaces', slug);
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => toggle('saved', slug)}
        aria-pressed={saved}
        className={`rounded-full border px-5 py-2.5 font-semibold transition ${
          saved ? 'border-dune-500 bg-dune-500 text-white' : 'border-sand-300 bg-white hover:bg-sand-100'
        }`}
      >
        {saved ? '♥ ' + tr('saved') : '♡ ' + tr('save')}
      </button>
      <button
        type="button"
        onClick={() => toggle('visitedPlaces', slug)}
        aria-pressed={visited}
        className={`rounded-full border px-5 py-2.5 font-semibold transition ${
          visited ? 'border-palm-600 bg-palm-600 text-white' : 'border-sand-300 bg-white hover:bg-sand-100'
        }`}
      >
        {visited ? '✓ ' + tr('visited') : tr('markVisited')}
      </button>
    </div>
  );
}
