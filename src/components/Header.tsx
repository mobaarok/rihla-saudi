'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { SITE } from '@/config/site';
import { useUser } from './UserProvider';

export default function Header() {
  const tr = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  const links = [
    { href: '/regions', label: tr('explore') },
    { href: '/map', label: tr('map') },
    { href: '/passport', label: tr('passport') },
    { href: '/saved', label: tr('saved') },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-[1000] border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-palm-700">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-palm-600 text-sm text-white">
            ✦
          </span>
          {locale === 'ar' ? SITE.name.ar : SITE.name.en}
        </Link>

        <nav className="ms-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                isActive(l.href) ? 'bg-palm-600 text-white' : 'text-ink hover:bg-sand-200'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 md:ms-2">
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-full border border-sand-300 px-3 py-1.5 text-sm font-medium hover:bg-sand-200"
          >
            {tr('language')}
          </Link>
          <Link
            href={user ? '/profile' : '/login'}
            className="hidden rounded-full bg-dune-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-dune-600 sm:block"
          >
            {user ? tr('profile') : tr('signIn')}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 hover:bg-sand-200 md:hidden"
            aria-label={tr('menu')}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand-200 px-4 py-3 md:hidden">
          {[...links, { href: user ? '/profile' : '/login', label: user ? tr('profile') : tr('signIn') }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium hover:bg-sand-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
