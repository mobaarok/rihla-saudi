import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE } from '@/config/site';
import { getCity, getNearestAirportCity, getPlace, getPlacesInRegion, getRegion, places, t } from '@/lib/content';
import PlaceCover from '@/components/PlaceCover';
import PlaceCard from '@/components/PlaceCard';
import MapLoader from '@/components/MapLoader';
import { PlaceActionButtons } from '@/components/PlaceActions';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => places.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const place = getPlace(slug);
  if (!place) return {};
  return {
    title: t(place.name, locale),
    description: t(place.summary, locale),
    alternates: {
      canonical: `/${locale}/places/${slug}`,
      languages: { en: `/en/places/${slug}`, ar: `/ar/places/${slug}` },
    },
    openGraph: {
      title: t(place.name, locale),
      description: t(place.summary, locale),
      type: 'article',
      ...(place.photo && { images: [`${SITE.url}${place.photo.src}`] }),
    },
  };
}

export default async function PlacePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const place = getPlace(slug);
  if (!place) notFound();
  const region = getRegion(place.region)!;
  const tr = await getTranslations('place');
  const trc = await getTranslations('category');
  const trTime = await getTranslations('time');
  const trCost = await getTranslations('cost');
  const trAccess = await getTranslations('access');
  const city = getCity(place.from.city);
  const airport = getNearestAirportCity(place);
  const more = getPlacesInRegion(place.region).filter((p) => p.slug !== slug).slice(0, 3);
  const [lat, lng] = place.coords;

  // Structured data helps Google understand this is a tourist attraction.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: t(place.name, locale),
    description: t(place.description, locale),
    url: `${SITE.url}/${locale}/places/${slug}`,
    geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
    containedInPlace: { '@type': 'AdministrativeArea', name: t(region.name, locale) },
    ...(place.photo && { image: `${SITE.url}${place.photo.src}` }),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative h-72 md:h-96">
        <PlaceCover place={place} big />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-4 pb-8 text-white">
            <p className="mb-2 text-sm font-medium text-white/85">
              <Link href="/regions" className="hover:underline">
                {locale === 'ar' ? 'المناطق' : 'Regions'}
              </Link>
              {' / '}
              <Link href={`/regions/${region.slug}`} className="hover:underline">
                {t(region.name, locale)}
              </Link>
            </p>
            <h1 className="font-display text-3xl font-semibold md:text-5xl">{t(place.name, locale)}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-8 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-sand-200 px-3 py-1 font-medium">{trc(place.category)}</span>
            {place.unesco && (
              <span className="rounded-full bg-palm-600 px-3 py-1 font-medium text-white">{tr('unesco')}</span>
            )}
            {place.muslimsOnly && (
              <span className="rounded-full bg-ink px-3 py-1 font-medium text-white">{tr('muslimsOnly')}</span>
            )}
          </div>
          <p className="text-xl font-medium leading-relaxed">{t(place.summary, locale)}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">{t(place.description, locale)}</p>

          {place.tip && (
            <div className="mt-6 rounded-xl border border-palm-500/30 bg-palm-500/5 p-4">
              <p className="text-sm font-semibold text-palm-700">💡 {tr('tip')}</p>
              <p className="mt-1">{t(place.tip, locale)}</p>
            </div>
          )}
          {place.muslimsOnly && <p className="mt-4 text-sm font-medium text-muted">{tr('muslimsOnlyNote')}</p>}

          <div className="mt-8">
            <PlaceActionButtons slug={place.slug} />
          </div>

          <p className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            ⚠️ {tr('verify')}
          </p>
          {place.photo && (
            <p className="mt-4 text-xs text-muted">
              <a href={place.photo.source} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {tr('photoBy', { credit: place.photo.credit, license: place.photo.license })}
              </a>
            </p>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-sand-200 bg-white p-5">
            <h2 className="mb-3 font-display text-xl font-semibold">{tr('plan')}</h2>
            <dl className="space-y-3 text-[15px]">
              <Info label={tr('bestTime')}>{t(place.bestTime, locale)}</Info>
              <Info label={tr('timeNeeded')}>{trTime(place.time)}</Info>
              <Info label={tr('cost')}>{trCost(place.cost)}</Info>
              <Info label={tr('gettingThere')}>
                {city &&
                  (place.from.km === 0
                    ? tr('inCity', { city: t(city.name, locale) })
                    : tr('fromCity', { km: place.from.km, city: t(city.name, locale) }))}
                <br />
                <span className="text-muted">{trAccess(place.access)}</span>
              </Info>
              {airport?.airport && (
                <Info label={tr('nearestAirport')}>
                  {t(airport.airport.name, locale)} (<span dir="ltr">{airport.airport.code}</span>)
                </Info>
              )}
              <Info label={tr('region')}>
                <Link href={`/regions/${region.slug}`} className="font-medium text-palm-600 hover:underline">
                  {t(region.name, locale)}
                </Link>
              </Info>
            </dl>
            <Link href="/getting-around" className="mt-4 block text-sm font-semibold text-palm-600 hover:underline">
              {tr('transportLink')} →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white">
            <MapLoader focus={place.slug} height={260} />
            <div className="space-y-1 p-4 text-sm">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-palm-600 hover:underline"
              >
                {tr('openInMaps')} ↗
              </a>
              <p className="text-xs text-muted">{tr('approx')}</p>
            </div>
          </div>
        </aside>
      </div>

      {more.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-16">
          <h2 className="mb-6 font-display text-2xl font-semibold">{tr('more', { name: t(region.name, locale) })}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PlaceCard key={p.slug} place={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Info({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-dune-600">{label}</dt>
      <dd className="mt-0.5">{children}</dd>
    </div>
  );
}
