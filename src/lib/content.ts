import { places } from '@/data/places';
import { regions } from '@/data/regions';
import type { Category, Localized } from '@/data/types';

// Content lives in code for now so pages are fast and easy to index.
// Later you can move it to Firestore or a CMS without changing the pages.

export const CATEGORIES: Category[] = ['heritage', 'nature', 'mountains', 'coast', 'city', 'culture'];

export function t(text: Localized, locale: string): string {
  return locale === 'ar' ? text.ar : text.en;
}

export function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug);
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}

export function getPlacesInRegion(regionSlug: string) {
  return places.filter((p) => p.region === regionSlug);
}

export function getFeaturedPlaces() {
  const featured = ['hegra', 'at-turaif-diriyah', 'edge-of-the-world', 'historic-jeddah', 'rijal-almaa', 'farasan-islands'];
  return featured.map((s) => getPlace(s)!).filter(Boolean);
}

export { places, regions };
