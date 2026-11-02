import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHeader from '@/components/PageHeader';
import { places, t } from '@/lib/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'credits' });
  return { title: tr('title') };
}

export default async function CreditsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('credits');
  const withPhotos = places.filter((p) => p.photo);

  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <section className="space-y-2 text-muted">
          <p>{tr('photosText')}</p>
          <p>{tr('mapText')}</p>
        </section>
        <ul className="mt-8 divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
          {withPhotos.map((p) => (
            <li key={p.slug} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
              <Link href={`/places/${p.slug}`} className="font-semibold text-palm-700 hover:underline sm:w-64 sm:shrink-0">
                {t(p.name, locale)}
              </Link>
              <span className="text-sm text-muted" dir="ltr">
                {p.photo!.credit} ·{' '}
                {p.photo!.licenseUrl ? (
                  <a href={p.photo!.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {p.photo!.license}
                  </a>
                ) : (
                  p.photo!.license
                )}{' '}
                ·{' '}
                <a href={p.photo!.source} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Wikimedia Commons
                </a>
              </span>
            </li>
          ))}
          {withPhotos.length === 0 && <li className="p-4 text-muted">—</li>}
        </ul>
      </div>
    </>
  );
}
