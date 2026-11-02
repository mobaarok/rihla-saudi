import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PassportView from './PassportView';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'passport' });
  return { title: tr('title'), robots: { index: false } };
}

export default async function PassportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('passport');
  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <PassportView />
    </>
  );
}
