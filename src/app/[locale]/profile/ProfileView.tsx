'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { places, regions } from '@/lib/content';
import { useUser } from '@/components/UserProvider';
import { useVisitedRegions } from '@/components/PassportMap';

export default function ProfileView() {
  const tr = useTranslations('profile');
  const trn = useTranslations('nav');
  const tra = useTranslations('auth');
  const trp = useTranslations('passport');
  const router = useRouter();
  const { user, authReady, lists, signOut } = useUser();
  const visitedRegions = useVisitedRegions();

  useEffect(() => {
    if (authReady && !user) router.replace('/login');
  }, [authReady, user, router]);

  if (!user) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.photoURL} alt="" className="h-16 w-16 rounded-full" referrerPolicy="no-referrer" />
          ) : (
            <div className="grid h-16 w-16 place-items-center rounded-full bg-palm-600 text-2xl font-semibold text-white">
              {(user.displayName ?? user.email ?? '?')[0].toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="font-display text-2xl font-semibold">{user.displayName ?? tr('title')}</h1>
            <p className="text-sm text-muted">{tr('member', { email: user.email ?? '' })}</p>
          </div>
        </div>

        <h2 className="mt-8 font-semibold">{tr('stats')}</h2>
        <div className="mt-3 grid grid-cols-3 gap-3 text-center">
          <Stat value={`${visitedRegions.size}/${regions.length}`} label={trp('regionsVisited')} />
          <Stat value={`${lists.visitedPlaces.length}/${places.length}`} label={trp('placesVisited')} />
          <Stat value={String(lists.saved.length)} label={trn('saved')} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/passport" className="rounded-full bg-palm-600 px-5 py-2.5 font-semibold text-white hover:bg-palm-700">
            {trn('passport')}
          </Link>
          <Link href="/saved" className="rounded-full border border-sand-300 px-5 py-2.5 font-semibold hover:bg-sand-100">
            {trn('saved')}
          </Link>
          <button
            type="button"
            onClick={async () => {
              await signOut();
              router.replace('/');
            }}
            className="ms-auto rounded-full px-5 py-2.5 font-semibold text-red-700 hover:bg-red-50"
          >
            {tra('signOut')}
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-sand-100 p-3">
      <p className="font-display text-2xl font-semibold text-palm-700" dir="ltr">
        {value}
      </p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
