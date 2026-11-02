import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { regions } from '@/lib/content';
import RegionCard from '@/components/RegionCard';
import PageHeader from '@/components/PageHeader';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'regions' });
  return { title: tr('title'), alternates: { canonical: `/${locale}/regions`, languages: { en: '/en/regions', ar: '/ar/regions' } } };
}

export default async function RegionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('regions');
  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((r) => (
          <RegionCard key={r.slug} region={r} />
        ))}
      </div>
    </>
  );
}
