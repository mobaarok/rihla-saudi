'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signOut as fbSignOut, type User } from 'firebase/auth';
import { arrayRemove, arrayUnion, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export type UserLists = {
  saved: string[];
  visitedPlaces: string[];
  visitedRegions: string[];
};
type ListKey = keyof UserLists;

type Ctx = {
  user: User | null;
  authReady: boolean;
  lists: UserLists;
  has: (key: ListKey, id: string) => boolean;
  toggle: (key: ListKey, id: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const EMPTY: UserLists = { saved: [], visitedPlaces: [], visitedRegions: [] };
const LOCAL_KEY = 'rihla:lists';

function readLocal(): UserLists {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
}
function writeLocal(lists: UserLists) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(lists));
  } catch {
    /* storage unavailable (private mode) */
  }
}
function clearLocal() {
  try {
    localStorage.removeItem(LOCAL_KEY);
  } catch {
    /* ignore */
  }
}

const UserContext = createContext<Ctx | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [lists, setLists] = useState<UserLists>(EMPTY);

  // Track the signed-in user. Without Firebase, we are always "signed out".
  useEffect(() => {
    if (!auth) {
      setLists(readLocal());
      setAuthReady(true);
      return;
    }
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
      if (!u) setLists(readLocal());
    });
  }, []);

  // When signed in: move anything saved locally into the account, then listen for changes.
  useEffect(() => {
    if (!user || !db) return;
    const ref = doc(db, 'users', user.uid);
    const local = readLocal();
    const hasLocal = local.saved.length + local.visitedPlaces.length + local.visitedRegions.length > 0;

    setDoc(
      ref,
      {
        displayName: user.displayName ?? null,
        email: user.email ?? null,
        updatedAt: serverTimestamp(),
        ...(hasLocal && {
          saved: arrayUnion(...local.saved),
          visitedPlaces: arrayUnion(...local.visitedPlaces),
          visitedRegions: arrayUnion(...local.visitedRegions),
        }),
      },
      { merge: true },
    )
      .then(() => hasLocal && clearLocal())
      .catch((e) => console.error('Could not sync profile', e));

    return onSnapshot(
      ref,
      (snap) => {
        const d = snap.data() ?? {};
        setLists({
          saved: d.saved ?? [],
          visitedPlaces: d.visitedPlaces ?? [],
          visitedRegions: d.visitedRegions ?? [],
        });
      },
      (e) => console.error('Could not load your lists', e),
    );
  }, [user]);

  const has = useCallback((key: ListKey, id: string) => lists[key].includes(id), [lists]);

  const toggle = useCallback(
    async (key: ListKey, id: string) => {
      const exists = lists[key].includes(id);
      const next = { ...lists, [key]: exists ? lists[key].filter((x) => x !== id) : [...lists[key], id] };
      setLists(next); // update the screen immediately

      if (user && db) {
        await setDoc(
          doc(db, 'users', user.uid),
          { [key]: exists ? arrayRemove(id) : arrayUnion(id), updatedAt: serverTimestamp() },
          { merge: true },
        );
      } else {
        writeLocal(next);
      }
    },
    [lists, user],
  );

  const signOut = useCallback(async () => {
    if (auth) await fbSignOut(auth);
  }, []);

  const value = useMemo(() => ({ user, authReady, lists, has, toggle, signOut }), [user, authReady, lists, has, toggle, signOut]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used inside <UserProvider>');
  return ctx;
}
