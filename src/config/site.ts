// Change the site name, domain and tagline here. Everything else reads from this file.
export const SITE = {
  name: { en: 'Rihla Saudi', ar: 'رحلة السعودية' },
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;
