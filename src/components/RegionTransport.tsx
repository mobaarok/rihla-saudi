import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getRegionCities, t } from '@/lib/content';
import { railLines } from '@/data/transport';

// "Getting there" box on region pages, built from the cities table.
export default async function RegionTransport({ region }: { region: string }) {
  const tr = await getTranslations('transport');
  const locale = await getLocale();
  const regionCities = getRegionCities(region);
  const airports = regionCities.filter((c) => c.airport);
  const lines = railLines
    .map((line) => ({ line, stops: regionCities.filter((c) => c.rail?.includes(line.id)) }))
    .filter((x) => x.stops.length > 0);

  return (
    <div className="rounded-2xl border border-sand-200 bg-white p-5">
      <h2 className="font-display text-xl font-semibold">{tr('gettingThere')}</h2>
      <dl className="mt-3 space-y-3 text-[15px]">
        {airports.length > 0 && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-dune-600">✈️ {tr('flyInto')}</dt>
            <dd className="mt-1 space-y-0.5">
              {airports.map((c) => (
                <p key={c.slug}>
                  {t(c.name, locale)} (<span dir="ltr">{c.airport!.code}</span>)
                </p>
              ))}
            </dd>
          </div>
        )}
        {lines.length > 0 && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-dune-600">🚄 {tr('train')}</dt>
            <dd className="mt-1 space-y-0.5">
              {lines.map(({ line, stops }) => (
                <p key={line.id}>
                  {t(line.name, locale)}: {stops.map((s) => t(s.name, locale)).join(locale === 'ar' ? '، ' : ', ')}
                </p>
              ))}
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-dune-600">🚗 {tr('localTravel')}</dt>
          <dd className="mt-1 text-muted">{tr('localTravelText')}</dd>
        </div>
      </dl>
      <Link href="/getting-around" className="mt-4 block text-sm font-semibold text-palm-600 hover:underline">
        {tr('fullGuide')} →
      </Link>
    </div>
  );
}
