'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PASS_SCORE, type Question } from '@/data/quizzes';
import { optionOrder } from '@/lib/quiz';
import { t } from '@/lib/content';
import { useUser } from '@/components/UserProvider';

export default function QuizPlayer({
  region,
  regionName,
  questions,
}: {
  region: string;
  regionName: string;
  questions: Question[];
}) {
  const tr = useTranslations('quiz');
  const locale = useLocale();
  const { lists, saveQuizScore, user } = useUser();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [round, setRound] = useState(0);

  const q = questions[index];
  const order = useMemo(() => optionOrder(`${region}-${index}-${round}`, q.options.length), [region, index, round, q]);
  const best = lists.quizScores[region];

  const choose = (opt: number) => {
    if (picked !== null) return;
    setPicked(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setPicked(null);
    } else {
      setDone(true);
      saveQuizScore(region, score);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setRound((r) => r + 1);
  };

  if (done) {
    const passed = score >= PASS_SCORE;
    return (
      <div className="rounded-3xl border border-sand-200 bg-white p-8 text-center shadow-sm">
        <p className="text-6xl" aria-hidden>
          {passed ? '🏅' : '🧭'}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold">{tr('yourScore', { score, total: questions.length })}</h2>
        <p className="mt-2 text-muted">{passed ? tr('passed', { region: regionName }) : tr('failed', { pass: PASS_SCORE })}</p>
        {!user && <p className="mt-2 text-sm text-muted">{tr('signInToKeep')}</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={restart} className="rounded-full border border-sand-300 px-5 py-2.5 font-semibold hover:bg-sand-100">
            {tr('tryAgain')}
          </button>
          <Link href="/quiz" className="rounded-full bg-palm-600 px-5 py-2.5 font-semibold text-white hover:bg-palm-700">
            {tr('moreQuizzes')}
          </Link>
          {passed && (
            <Link href="/passport" className="rounded-full bg-dune-500 px-5 py-2.5 font-semibold text-white hover:bg-dune-600">
              {tr('seeBadge')}
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>{tr('progress', { n: index + 1, total: questions.length })}</span>
        {best !== undefined && <span>{tr('best', { score: best, total: questions.length })}</span>}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sand-200">
        <div className="h-full bg-palm-600 transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      <h2 className="mt-6 font-display text-2xl font-semibold leading-snug">{t(q.q, locale)}</h2>

      <div className="mt-6 grid gap-3" role="radiogroup">
        {order.map((opt) => {
          const isAnswer = opt === q.answer;
          const isPicked = opt === picked;
          let style = 'border-sand-300 bg-white hover:border-palm-500 hover:bg-sand-50';
          if (picked !== null) {
            if (isAnswer) style = 'border-palm-600 bg-palm-500/10 text-palm-700';
            else if (isPicked) style = 'border-red-400 bg-red-50 text-red-800';
            else style = 'border-sand-200 bg-white opacity-60';
          }
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isPicked}
              disabled={picked !== null}
              onClick={() => choose(opt)}
              className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 text-start font-medium transition ${style}`}
            >
              <span>{t(q.options[opt], locale)}</span>
              {picked !== null && isAnswer && <span aria-hidden>✓</span>}
              {picked !== null && isPicked && !isAnswer && <span aria-hidden>✗</span>}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-6" aria-live="polite">
          <p className={`font-semibold ${picked === q.answer ? 'text-palm-700' : 'text-red-700'}`}>
            {picked === q.answer ? tr('correct') : tr('wrong')}
          </p>
          <p className="mt-1 text-ink/85">{t(q.explain, locale)}</p>
          <button
            type="button"
            onClick={next}
            className="mt-5 rounded-full bg-palm-600 px-6 py-2.5 font-semibold text-white hover:bg-palm-700"
            autoFocus
          >
            {index + 1 < questions.length ? tr('next') : tr('finish')}
          </button>
        </div>
      )}
    </div>
  );
}
