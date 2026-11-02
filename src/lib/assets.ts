// Files in /public need the base path when the site is hosted in a sub-folder
// (GitHub Pages serves it from /rihla-saudi).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(src: string) {
  return src.startsWith('/') ? BASE + src : src;
}
