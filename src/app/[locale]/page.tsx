import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getFeaturedPlaces, places, regions } from '@/lib/content';
import PlaceCard from '@/components/PlaceCard';
import RegionCard from '@/components/RegionCard';
import PassportMap from '@/components/PassportMap';
import { patternBg } from '@/lib/style';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('home');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={patternBg('#114d31', '#a9511f', 135)}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
              {tr('eyebrow', { count: places.length })}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{tr('title')}</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">{tr('subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/regions" className="rounded-full bg-white px-6 py-3 font-semibold text-palm-700 hover:bg-sand-100">
                {tr('ctaExplore')}
              </Link>
              <Link href="/passport" className="rounded-full border border-white/60 px-6 py-3 font-semibold hover:bg-white/10">
                {tr('ctaPassport')}
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm">
            <PassportMap interactive={false} />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold">{tr('featured')}</h2>
          <Link href="/map" className="text-sm font-semibold text-palm-600 hover:underline">
            {tr('seeAll')}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getFeaturedPlaces().map((p) => (
            <PlaceCard key={p.slug} place={p} />
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <h2 className="font-display text-3xl font-semibold">{tr('regionsTitle')}</h2>
        <p className="mb-6 mt-2 text-muted">{tr('regionsSubtitle')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <RegionCard key={r.slug} region={r} />
          ))}
        </div>
      </section>

      {/* Passport CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-sand-200 bg-white p-8 md:flex-row md:items-center">
          <div className="text-5xl" aria-hidden>
            🛂
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-semibold">{tr('passportTitle')}</h2>
            <p className="mt-1 text-muted">{tr('passportText')}</p>
          </div>
          <Link href="/passport" className="rounded-full bg-palm-600 px-6 py-3 font-semibold text-white hover:bg-palm-700">
            {tr('ctaPassport')}
          </Link>
        </div>
      </section>
    </>
  );
}
