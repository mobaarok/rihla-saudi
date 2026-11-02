import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import MapLoader from '@/components/MapLoader';
import PlaceCard from '@/components/PlaceCard';
import FilteredPlaces from '@/components/FilteredPlaces';
import { places } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'map' });
  return { title: tr('title'), alternates: { canonical: `/${locale}/map`, languages: { en: '/en/map', ar: '/ar/map' } } };
}

export default async function MapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('map');
  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <div className="mx-auto max-w-6xl space-y-12 px-4 pt-10">
        <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm">
          <MapLoader />
        </div>
        <FilteredPlaces items={places.map((p) => ({ slug: p.slug, category: p.category, card: <PlaceCard place={p} /> }))} />
      </div>
    </>
  );
}
