'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MAP_VIEWBOX, REGION_LABEL_POINTS, REGION_PATHS } from '@/data/regionPaths';
import { places, regions, t } from '@/lib/content';
import { useUser } from './UserProvider';

export function useVisitedRegions() {
  const { lists } = useUser();
  const fromPlaces = places.filter((p) => lists.visitedPlaces.includes(p.slug)).map((p) => p.region);
  return new Set([...lists.visitedRegions, ...fromPlaces]);
}

export default function PassportMap({ interactive = true }: { interactive?: boolean }) {
  const locale = useLocale();
  const tr = useTranslations('passport');
  const { toggle, lists } = useUser();
  const visited = useVisitedRegions();
  const [hover, setHover] = useState<string | null>(null);

  const hovered = regions.find((r) => r.slug === hover);

  return (
    <div className="relative">
      <svg viewBox={MAP_VIEWBOX} className="h-auto w-full drop-shadow-sm" role="group" aria-label={tr('title')}>
        {regions.map((r) => {
          const isVisited = visited.has(r.slug);
          const viaPlaceOnly = isVisited && !lists.visitedRegions.includes(r.slug);
          return (
            <path
              key={r.slug}
              d={REGION_PATHS[r.slug]}
              fill={isVisited ? r.colors[0] : hover === r.slug ? '#ebe0cc' : '#f5efe4'}
              stroke="#8a7b63"
              strokeWidth={1.2}
              strokeLinejoin="round"
              className={interactive ? 'cursor-pointer transition-[fill] duration-300 focus:outline-none' : ''}
              tabIndex={interactive ? 0 : -1}
              role={interactive ? 'button' : undefined}
              aria-pressed={interactive ? isVisited : undefined}
              aria-label={t(r.name, locale)}
              onMouseEnter={() => setHover(r.slug)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(r.slug)}
              onBlur={() => setHover(null)}
              onClick={() => {
                // A region that is coloured because of a visited place stays coloured.
                if (interactive && !viaPlaceOnly) toggle('visitedRegions', r.slug);
              }}
              onKeyDown={(e) => {
                if (interactive && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  if (!viaPlaceOnly) toggle('visitedRegions', r.slug);
                }
              }}
            />
          );
        })}
        {regions.map((r) => {
          const [x, y] = REGION_LABEL_POINTS[r.slug];
          return (
            <text
              key={r.slug}
              x={x}
              y={y}
              textAnchor="middle"
              className="pointer-events-none select-none"
              fontSize={r.slug === 'al-baha' ? 14 : 20}
              fontWeight={600}
              fill={visited.has(r.slug) ? '#fff' : '#6b6152'}
            >
              {t(r.name, locale)}
            </text>
          );
        })}
      </svg>
      {interactive && hovered && (
        <div className="pointer-events-none absolute start-3 top-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-semibold shadow">
          {t(hovered.name, locale)} · {visited.has(hovered.slug) ? tr('legendVisited') : tr('legendNotVisited')}
        </div>
      )}
    </div>
  );
}
