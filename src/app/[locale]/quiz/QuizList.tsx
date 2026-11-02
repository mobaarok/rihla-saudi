'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PASS_SCORE, quizzes } from '@/data/quizzes';
import { regions, t } from '@/lib/content';
import { patternBg } from '@/lib/style';
import { useUser } from '@/components/UserProvider';

export default function QuizList() {
  const tr = useTranslations('quiz');
  const locale = useLocale();
  const { lists } = useUser();
  const earned = regions.filter((r) => (lists.quizScores[r.slug] ?? 0) >= PASS_SCORE).length;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-8">
      <p className="text-muted">
        {tr('howItWorks', { pass: PASS_SCORE, total: 5 })}{' '}
        <span className="font-semibold text-ink">{tr('earned', { count: earned, total: regions.length })}</span>
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions
          .filter((r) => quizzes[r.slug])
          .map((r) => {
            const best = lists.quizScores[r.slug];
            const passed = (best ?? 0) >= PASS_SCORE;
            return (
              <Link
                key={r.slug}
                href={`/quiz/${r.slug}`}
                className="group relative flex min-h-36 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={patternBg(r.colors[0], r.colors[1])}
              >
                {passed && (
                  <span className="absolute end-4 top-4 text-3xl" title={tr('badge')} aria-label={tr('badge')}>
                    🏅
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-wide text-white/75">
                  {best === undefined ? tr('notTried') : tr('best', { score: best, total: quizzes[r.slug].length })}
                </p>
                <h3 className="font-display text-2xl font-semibold">{t(r.name, locale)}</h3>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
