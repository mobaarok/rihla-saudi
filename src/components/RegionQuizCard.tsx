'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PASS_SCORE, quizzes } from '@/data/quizzes';
import { useUser } from './UserProvider';

export default function RegionQuizCard({ region }: { region: string }) {
  const tr = useTranslations('quiz');
  const { lists } = useUser();
  const questions = quizzes[region];
  if (!questions) return null;
  const best = lists.quizScores[region];
  const passed = (best ?? 0) >= PASS_SCORE;

  return (
    <div className="flex flex-col rounded-2xl border border-sand-200 bg-white p-5">
      <h2 className="font-display text-xl font-semibold">
        {passed ? '🏅 ' : '🧭 '}
        {tr('cardTitle')}
      </h2>
      <p className="mt-2 text-muted">{tr('cardText', { total: questions.length, pass: PASS_SCORE })}</p>
      {best !== undefined && <p className="mt-2 text-sm font-semibold">{tr('best', { score: best, total: questions.length })}</p>}
      <Link
        href={`/quiz/${region}`}
        className="mt-4 self-start rounded-full bg-palm-600 px-5 py-2 font-semibold text-white hover:bg-palm-700"
      >
        {best === undefined ? tr('start') : tr('tryAgain')}
      </Link>
    </div>
  );
}
