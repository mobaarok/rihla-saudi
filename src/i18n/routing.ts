import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  // Change to 'ar' to make the site Arabic-first.
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];

export function dirFor(locale: string): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
