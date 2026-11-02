import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { getPlacesInRegion, getRegion, regions, t } from '@/lib/content';
import PageHeader from '@/components/PageHeader';
import PlaceCard from '@/components/PlaceCard';
import FilteredPlaces from '@/components/FilteredPlaces';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => regions.map((r) => ({ locale, slug: r.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  const tr = await getTranslations({ locale, namespace: 'regions' });
  return {
    title: tr('placesIn', { name: t(region.name, locale) }),
    description: t(region.summary, locale),
    alternates: {
      canonical: `/${locale}/regions/${slug}`,
      languages: { en: `/en/regions/${slug}`, ar: `/ar/regions/${slug}` },
    },
  };
}

export default async function RegionPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const region = getRegion(slug);
  if (!region) notFound();
  const tr = await getTranslations('regions');
  const regionPlaces = getPlacesInRegion(slug);

  return (
    <>
      <PageHeader
        colors={region.colors}
        eyebrow={
          <>
            <Link href="/regions" className="hover:underline">
              {tr('allRegions')}
            </Link>
            {' / '}
            {tr('capital', { name: t(region.capital, locale) })}
          </>
        }
        title={t(region.name, locale)}
        subtitle={t(region.summary, locale)}
      />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h2 className="mb-4 font-display text-2xl font-semibold">{tr('places', { count: regionPlaces.length })}</h2>
        {regionPlaces.length === 0 ? (
          <p className="text-muted">{tr('empty')}</p>
        ) : (
          <FilteredPlaces
            items={regionPlaces.map((p) => ({ slug: p.slug, category: p.category, card: <PlaceCard place={p} /> }))}
          />
        )}
      </div>
    </>
  );
}
