'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from '@/i18n/navigation';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { useUser } from '@/components/UserProvider';

export default function LoginForm() {
  const tr = useTranslations('auth');
  const router = useRouter();
  const { user } = useUser();
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) router.replace('/passport');
  }, [user, router]);

  async function run(fn: () => Promise<unknown>) {
    setError(null);
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      const code = (e as { code?: string }).code ?? '';
      if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
        console.error(e);
        setError(tr('error') + (code ? ` (${code})` : ''));
      }
    } finally {
      setBusy(false);
    }
  }

  const google = () => run(() => signInWithPopup(auth!, new GoogleAuthProvider()));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    run(() =>
      mode === 'signIn'
        ? signInWithEmailAndPassword(auth!, email, password)
        : createUserWithEmailAndPassword(auth!, email, password),
    );
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-sm">
        <h1 className="font-display text-3xl font-semibold">{mode === 'signIn' ? tr('title') : tr('signUp')}</h1>
        <p className="mt-2 text-muted">{tr('subtitle')}</p>

        {!isFirebaseConfigured ? (
          <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">{tr('notConfigured')}</p>
        ) : (
          <>
            <button
              type="button"
              onClick={google}
              disabled={busy}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-sand-300 bg-white px-4 py-3 font-semibold hover:bg-sand-100 disabled:opacity-60"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
              </svg>
              {tr('google')}
            </button>

            <div className="my-6 flex items-center gap-3 text-xs text-muted">
              <span className="h-px flex-1 bg-sand-200" />
              {tr('or')}
              <span className="h-px flex-1 bg-sand-200" />
            </div>

            <form onSubmit={submit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">{tr('email')}</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-sand-300 px-4 py-2.5 outline-none focus:border-palm-600"
                  dir="ltr"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">{tr('password')}</span>
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === 'signIn' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-sand-300 px-4 py-2.5 outline-none focus:border-palm-600"
                  dir="ltr"
                />
              </label>
              {error && <p className="text-sm text-red-700">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-full bg-palm-600 px-4 py-3 font-semibold text-white hover:bg-palm-700 disabled:opacity-60"
              >
                {mode === 'signIn' ? tr('signIn') : tr('signUp')}
              </button>
            </form>

            <button
              type="button"
              onClick={() => setMode((m) => (m === 'signIn' ? 'signUp' : 'signIn'))}
              className="mt-4 w-full text-center text-sm font-medium text-palm-600 hover:underline"
            >
              {mode === 'signIn' ? tr('switchToSignUp') : tr('switchToSignIn')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
