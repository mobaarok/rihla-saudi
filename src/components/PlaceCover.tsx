import type { Category } from '@/data/types';
import type { PlaceWithPhoto } from '@/data/places';
import { assetPath } from '@/lib/assets';
import { getRegion } from '@/lib/content';
import { patternBg } from '@/lib/style';

// Simple landscape silhouettes, used until real photos are added.
const SCENES: Record<Category, string> = {
  heritage: 'M0,100 L0,62 L14,62 L14,48 L22,40 L30,48 L30,62 L44,62 L44,36 Q52,24 60,36 L60,62 L74,62 L74,50 L86,50 L86,62 L100,62 L100,100 Z',
  nature: 'M0,100 L0,70 Q20,52 40,66 Q60,80 80,58 Q90,48 100,56 L100,100 Z',
  mountains: 'M0,100 L0,72 L22,40 L34,56 L52,24 L72,58 L84,46 L100,66 L100,100 Z',
  coast: 'M0,100 L0,74 Q12,68 25,74 T50,74 T75,74 T100,74 L100,100 Z M0,64 Q20,40 38,60 L0,64 Z',
  city: 'M0,100 L0,60 L10,60 L10,44 L20,44 L20,60 L28,60 L28,30 L38,30 L38,60 L48,60 L48,50 L58,50 L58,20 L64,14 L70,20 L70,60 L80,60 L80,40 L90,40 L90,60 L100,60 L100,100 Z',
  culture: 'M0,100 L0,70 Q25,50 50,58 Q75,66 100,50 L100,100 Z M44,40 A10,10 0 1,0 64,40 A10,10 0 1,0 44,40 Z',
  religious: 'M0,100 L0,64 L30,64 L30,44 Q50,22 70,44 L70,64 L100,64 L100,100 Z M78,64 L78,24 L84,18 L90,24 L90,64 Z',
};

export default function PlaceCover({
  place,
  className = '',
  big = false,
}: {
  place: PlaceWithPhoto;
  className?: string;
  big?: boolean;
}) {
  if (place.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={assetPath(place.photo.src)}
        alt=""
        loading={big ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  const [a, b] = getRegion(place.region)?.colors ?? ['#a16207', '#713f12'];
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={patternBg(a, b, 160)}
      aria-hidden
    >
      <div
        className="absolute rounded-full bg-amber-200/80"
        style={{ width: big ? 90 : 48, height: big ? 90 : 48, top: '14%', insetInlineEnd: '14%' }}
      />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/4 w-full">
        <path d={SCENES[place.category]} fill="rgb(0 0 0 / 0.28)" />
      </svg>
    </div>
  );
}
