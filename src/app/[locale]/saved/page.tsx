import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PlaceCard from '@/components/PlaceCard';
import { places } from '@/lib/content';
import SavedList from './SavedList';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'saved' });
  return { title: tr('title'), robots: { index: false } };
}

export default async function SavedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('saved');
  // Cards are rendered on the server; the client list shows only the saved ones.
  const cards = places.map((p) => ({ slug: p.slug, card: <PlaceCard place={p} /> }));
  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <SavedList cards={cards} />
    </>
  );
}
