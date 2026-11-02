import { places } from '@/data/places';
import { regions } from '@/data/regions';
import { cities, getCity } from '@/data/cities';
import type { Category, Localized } from '@/data/types';

// Content lives in code for now so pages are fast and easy to index.
// Later you can move it to Firestore or a CMS without changing the pages.

export const CATEGORIES: Category[] = ['heritage', 'nature', 'mountains', 'coast', 'city', 'culture', 'religious'];

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

/** The airport to fly into for a place: its own city's airport, or the main one in its region. */
export function getNearestAirportCity(place: { from: { city: string }; region: string }) {
  const own = getCity(place.from.city);
  if (own?.airport) return own;
  return cities.find((c) => c.region === place.region && c.airport);
}

export function getRegionCities(regionSlug: string) {
  return cities.filter((c) => c.region === regionSlug);
}

export { places, regions, cities, getCity };
