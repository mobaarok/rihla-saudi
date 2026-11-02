import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import PageHeader from '@/components/PageHeader';
import { quizzes } from '@/data/quizzes';
import { getRegion, t } from '@/lib/content';
import QuizPlayer from './QuizPlayer';

type Params = Promise<{ locale: string; region: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => Object.keys(quizzes).map((region) => ({ locale, region })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  const tr = await getTranslations({ locale, namespace: 'quiz' });
  return { title: tr('regionTitle', { region: t(r.name, locale) }) };
}

export default async function RegionQuizPage({ params }: { params: Params }) {
  const { locale, region } = await params;
  setRequestLocale(locale);
  const r = getRegion(region);
  const questions = quizzes[region];
  if (!r || !questions) notFound();
  const tr = await getTranslations('quiz');

  return (
    <>
      <PageHeader
        colors={r.colors}
        eyebrow={
          <Link href="/quiz" className="hover:underline">
            {tr('allQuizzes')}
          </Link>
        }
        title={tr('regionTitle', { region: t(r.name, locale) })}
        subtitle={tr('intro', { total: questions.length })}
      />
      <div className="mx-auto max-w-2xl px-4 pt-10">
        <QuizPlayer region={region} regionName={t(r.name, locale)} questions={questions} />
        <p className="mt-6 text-center text-sm">
          <Link href={`/regions/${region}`} className="font-semibold text-palm-600 hover:underline">
            {tr('readAbout', { region: t(r.name, locale) })} →
          </Link>
        </p>
      </div>
    </>
  );
}
