'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export default function SearchBox({
  initial = '',
  onChange,
  autoFocus = false,
  variant = 'light',
}: {
  initial?: string;
  /** If given, the box filters in place instead of opening the search page. */
  onChange?: (q: string) => void;
  autoFocus?: boolean;
  variant?: 'light' | 'hero';
}) {
  const tr = useTranslations('search');
  const router = useRouter();
  const [q, setQ] = useState(initial);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!onChange) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <form onSubmit={submit} role="search" className="relative w-full">
      <svg
        className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-muted"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => {
          setQ(e.target.value);
          onChange?.(e.target.value);
        }}
        placeholder={tr('placeholder')}
        aria-label={tr('title')}
        className={`w-full rounded-full border py-3 pe-4 ps-11 text-ink outline-none transition focus:border-palm-600 focus:ring-2 focus:ring-palm-500/20 ${
          variant === 'hero' ? 'border-white/40 bg-white shadow-lg' : 'border-sand-300 bg-white'
        }`}
      />
    </form>
  );
}
