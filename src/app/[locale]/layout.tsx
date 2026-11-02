import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Inter, Fraunces, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { routing, dirFor } from '@/i18n/routing';
import { SITE } from '@/config/site';
import { t } from '@/lib/content';
import { UserProvider } from '@/components/UserProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const latin = Inter({ subsets: ['latin'], variable: '--font-latin', display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'meta' });
  const name = t(SITE.name, locale);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: `${name} · ${tr('tagline')}`, template: `%s · ${name}` },
    description: tr('description'),
    alternates: { canonical: `/${locale}`, languages: { en: '/en', ar: '/ar' } },
    openGraph: { siteName: name, locale: locale === 'ar' ? 'ar_SA' : 'en_US', type: 'website' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={dirFor(locale)} className={`${latin.variable} ${serif.variable} ${arabic.variable}`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <UserProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
