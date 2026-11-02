'use client';

import dynamic from 'next/dynamic';

const PlacesMap = dynamic(() => import('./PlacesMap'), {
  ssr: false,
  loading: () => <div className="h-[520px] w-full animate-pulse rounded-2xl bg-sand-200" />,
});

export default function MapLoader(props: { focus?: string; height?: number }) {
  return <PlacesMap {...props} />;
}
