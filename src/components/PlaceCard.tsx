import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Place } from '@/data/types';
import { getRegion, t } from '@/lib/content';
import PlaceCover from './PlaceCover';
import { SaveHeart } from './PlaceActions';

export default function PlaceCard({ place }: { place: Place }) {
  const locale = useLocale();
  const trc = useTranslations('category');
  const region = getRegion(place.region);
  return (
    <Link
      href={`/places/${place.slug}`}
      className="group block overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3]">
        <PlaceCover place={place} />
        <SaveHeart slug={place.slug} className="absolute end-3 top-3" />
        <span className="absolute bottom-3 start-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold">
          {trc(place.category)}
        </span>
      </div>
      <div className="space-y-1 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-dune-600">
          {region && t(region.name, locale)}
          {place.unesco && ' · UNESCO'}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-palm-700">
          {t(place.name, locale)}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{t(place.summary, locale)}</p>
      </div>
    </Link>
  );
}
