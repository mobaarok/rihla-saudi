import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/PageHeader';
import PlaceCard from '@/components/PlaceCard';
import { getRegion, places, regions } from '@/lib/content';
import { normalize } from '@/lib/search';
import SearchView from './SearchView';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'search' });
  return { title: tr('title'), robots: { index: false } };
}

export default async function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('search');
  const trc = await getTranslations({ locale: 'en', namespace: 'category' });
  const trcAr = await getTranslations({ locale: 'ar', namespace: 'category' });

  // Each item carries its searchable text (both languages) and a card rendered on the server.
  const placeItems = places.map((p) => {
    const region = getRegion(p.region)!;
    const text = [
      p.name.en,
      p.name.ar,
      p.summary.en,
      p.summary.ar,
      p.description.en,
      p.description.ar,
      region.name.en,
      region.name.ar,
      trc(p.category),
      trcAr(p.category),
      p.unesco ? 'UNESCO يونسكو' : '',
      p.slug,
    ].join(' ');
    return { slug: p.slug, text: normalize(text), card: <PlaceCard place={p} /> };
  });
  const regionItems = regions.map((r) => ({
    slug: r.slug,
    text: normalize([r.name.en, r.name.ar, r.capital.en, r.capital.ar].join(' ')),
    name: locale === 'ar' ? r.name.ar : r.name.en,
  }));

  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <SearchView places={placeItems} regions={regionItems} />
    </>
  );
}
