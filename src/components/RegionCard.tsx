import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Region } from '@/data/types';
import { getPlacesInRegion, t } from '@/lib/content';
import { patternBg } from '@/lib/style';

export default function RegionCard({ region }: { region: Region }) {
  const locale = useLocale();
  const tr = useTranslations('regions');
  const count = getPlacesInRegion(region.slug).length;
  const [a, b] = region.colors;
  return (
    <Link
      href={`/regions/${region.slug}`}
      className="group relative flex min-h-44 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      style={patternBg(a, b)}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-white/75">{tr('places', { count })}</p>
      <h3 className="font-display text-2xl font-semibold">{t(region.name, locale)}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-white/85">{t(region.summary, locale)}</p>
    </Link>
  );
}
