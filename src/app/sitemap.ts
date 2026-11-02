export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { routing } from '@/i18n/routing';
import { places, regions } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/regions', '/map', '/getting-around', '/quiz', '/credits', ...regions.map((r) => `/quiz/${r.slug}`), ...regions.map((r) => `/regions/${r.slug}`), ...places.map((p) => `/places/${p.slug}`)];
  return paths.map((path) => ({
    url: `${SITE.url}/${routing.defaultLocale}${path}/`,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE.url}/${l}${path}/`])),
    },
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : path.startsWith('/places') ? 0.8 : 0.6,
  }));
}
