export type Localized = { en: string; ar: string };

export type Category = 'heritage' | 'nature' | 'mountains' | 'coast' | 'city' | 'culture' | 'religious';

/** How long a typical visit takes. */
export type TimeNeeded = 'short' | 'half-day' | 'full-day' | 'multi-day';

/** What it costs to get in. */
export type Cost = 'free' | 'ticket' | 'tour' | 'varies';

/** How you get there. */
export type Access = 'city' | 'car' | '4x4' | 'guided' | 'ferry';

export type Region = {
  slug: string;
  iso: string; // ISO 3166-2 code
  name: Localized;
  capital: Localized;
  summary: Localized;
  /** Two colours used for this region's cover art. */
  colors: [string, string];
};

export type RailLine = 'haramain' | 'sar-east' | 'sar-north';

export type City = {
  slug: string;
  region: string;
  name: Localized;
  airport?: { code: string; name: Localized };
  rail?: RailLine[];
};

export type Photo = {
  src: string; // path under /public, e.g. /photos/hegra.webp
  title: string; // Wikimedia Commons file title
  credit: string; // author
  license: string; // e.g. "CC BY-SA 4.0"
  licenseUrl?: string;
  source: string; // Commons file page
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
  /** Nearest city (a City slug) and the approximate road distance in km. 0 = in the city. */
  from: { city: string; km: number };
  access: Access;
  time: TimeNeeded;
  cost: Cost;
  tip?: Localized;
  unesco?: boolean;
  /** Only Muslims may enter (Makkah and the Haram areas). */
  muslimsOnly?: boolean;
  /** Search words used by the photo script to find a licensed photo on Wikimedia Commons. */
  photoQuery?: string;
};
