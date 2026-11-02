'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { places, t } from '@/lib/content';
import { useUser } from './UserProvider';

// Loaded only in the browser (see MapLoader). Leaflet needs `window`.
export default function PlacesMap({
  focus,
  height = 520,
}: {
  /** Slug of a single place to centre on. If empty, show all places. */
  focus?: string;
  height?: number;
}) {
  const locale = useLocale();
  const { has } = useUser();
  const focused = focus ? places.find((p) => p.slug === focus) : undefined;
  const shown = focused ? [focused] : places;
  const bounds = L.latLngBounds(places.map((p) => p.coords)).pad(0.05);

  return (
    <MapContainer
      {...(focused ? { center: focused.coords, zoom: 9 } : { bounds })}
      scrollWheelZoom={false}
      style={{ height, width: '100%' }}
      className="z-0 rounded-2xl"
    >
      {/* CARTO light tiles are free for low traffic with attribution.
          For real traffic, switch to a paid tile plan (e.g. MapTiler, Stadia, CARTO). */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {shown.map((p) => {
        const visited = has('visitedPlaces', p.slug);
        return (
          <CircleMarker
            key={p.slug}
            center={p.coords}
            radius={focused ? 11 : 8}
            pathOptions={{ color: '#fff', weight: 2, fillColor: visited ? '#1f7a55' : '#c8662b', fillOpacity: 1 }}
          >
            <Popup>
              <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-w-40">
                <p className="font-semibold">{t(p.name, locale)}</p>
                <p className="my-1 text-xs">{t(p.summary, locale)}</p>
                {!focused && (
                  <Link href={`/places/${p.slug}`} className="text-xs font-semibold">
                    {locale === 'ar' ? 'عرض التفاصيل ←' : 'View details →'}
                  </Link>
                )}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
