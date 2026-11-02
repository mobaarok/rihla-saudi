export type Localized = { en: string; ar: string };

export type Category = 'heritage' | 'nature' | 'mountains' | 'coast' | 'city' | 'culture';

export type Region = {
  slug: string;
  iso: string; // ISO 3166-2 code
  name: Localized;
  capital: Localized;
  summary: Localized;
  /** Two colours used for this region's cover art. */
  colors: [string, string];
};

export type Place = {
  slug: string;
  region: string; // Region slug
  category: Category;
  name: Localized;
  summary: Localized;
  description: Localized;
  bestTime: Localized;
  /** Approximate [latitude, longitude]. Verify before publishing. */
  coords: [number, number];
  unesco?: boolean;
  /** Add a licensed photo later: your own, Wikimedia Commons, or an official press kit. */
  image?: { src: string; credit: string; license: string };
};
