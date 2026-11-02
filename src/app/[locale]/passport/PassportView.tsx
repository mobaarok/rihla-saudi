'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SITE } from '@/config/site';
import { places, regions, t } from '@/lib/content';
import PassportMap, { useVisitedRegions } from '@/components/PassportMap';
import { useUser } from '@/components/UserProvider';
import { PASS_SCORE } from '@/data/quizzes';

export default function PassportView() {
  const tr = useTranslations('passport');
  const locale = useLocale();
  const { user, authReady, lists } = useUser();
  const visitedRegions = useVisitedRegions();
  const visitedPlaces = places.filter((p) => lists.visitedPlaces.includes(p.slug));
  const [copied, setCopied] = useState(false);
  const badges = regions.filter((r) => (lists.quizScores[r.slug] ?? 0) >= PASS_SCORE);

  const share = async () => {
    const text = tr('shareText', {
      regions: visitedRegions.size,
      places: visitedPlaces.length,
      site: t(SITE.name, locale),
    });
    try {
      await navigator.clipboard.writeText(`${text} ${SITE.url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8">
      {authReady && !user && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sand-300 bg-sand-100 p-4 text-sm">
          <span>{tr('notSignedIn')}</span>
          <Link href="/login" className="rounded-full bg-dune-500 px-4 py-1.5 font-semibold text-white hover:bg-dune-600">
            {tr('signInToSave')}
          </Link>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="rounded-3xl border border-sand-200 bg-white p-4 md:p-8">
          <PassportMap />
          <div className="mt-4 flex gap-5 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-palm-600" /> {tr('legendVisited')}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm border border-[#8a7b63] bg-sand-100" /> {tr('legendNotVisited')}
            </span>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Stat label={tr('regionsVisited')} value={`${visitedRegions.size}/${regions.length}`} />
            <Stat label={tr('placesVisited')} value={`${visitedPlaces.length}/${places.length}`} />
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-sand-200">
            <div
              className="h-full rounded-full bg-palm-600 transition-all"
              style={{ width: `${(visitedRegions.size / regions.length) * 100}%` }}
            />
          </div>
          <button
            type="button"
            onClick={share}
            className="w-full rounded-full border border-sand-300 bg-white px-4 py-2 font-semibold hover:bg-sand-100"
          >
            {copied ? tr('copied') : tr('share')}
          </button>

          <div className="rounded-2xl border border-sand-200 bg-white p-5">
            <h2 className="mb-3 font-semibold">🏅 {tr('badges')}</h2>
            {badges.length === 0 ? (
              <p className="text-sm text-muted">{tr('noBadges')}</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {badges.map((r) => (
                  <span
                    key={r.slug}
                    className="rounded-full px-3 py-1 text-sm font-semibold text-white"
                    style={{ backgroundColor: r.colors[0] }}
                  >
                    🏅 {t(r.name, locale)}
                  </span>
                ))}
              </div>
            )}
            <Link href="/quiz" className="mt-3 inline-block text-sm font-semibold text-palm-600 hover:underline">
              {tr('takeQuiz')} →
            </Link>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-white p-5">
            <h2 className="mb-3 font-semibold">{tr('visitedPlaces')}</h2>
            {visitedPlaces.length === 0 ? (
              <p className="text-sm text-muted">{tr('noPlaces')}</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {visitedPlaces.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/places/${p.slug}`} className="text-palm-600 hover:underline">
                      ✓ {t(p.name, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-sand-200 bg-white p-4">
      <p className="font-display text-3xl font-semibold text-palm-700" dir="ltr">
        {value}
      </p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
