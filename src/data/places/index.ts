import type { Photo, Place } from '../types';
import photos from '../photos.json';
import { riyadhPlaces } from './riyadh';
import { makkahPlaces } from './makkah';
import { madinahPlaces } from './madinah';
import { easternPlaces } from './eastern';
import { centralNorthPlaces } from './central-north';
import { tabukPlaces } from './tabuk';
import { southPlaces } from './south';

export type PlaceWithPhoto = Place & { photo?: Photo };

const photoMap = photos as Record<string, Photo>;

export const places: PlaceWithPhoto[] = [
  ...riyadhPlaces,
  ...makkahPlaces,
  ...madinahPlaces,
  ...easternPlaces,
  ...centralNorthPlaces,
  ...tabukPlaces,
  ...southPlaces,
].map((p) => (photoMap[p.slug] ? { ...p, photo: photoMap[p.slug] } : p));
