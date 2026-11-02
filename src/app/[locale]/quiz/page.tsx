import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import QuizList from './QuizList';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'quiz' });
  return {
    title: tr('title'),
    description: tr('subtitle'),
    alternates: { canonical: `/${locale}/quiz`, languages: { en: '/en/quiz', ar: '/ar/quiz' } },
  };
}

export default async function QuizIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('quiz');
  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <QuizList />
    </>
  );
}
