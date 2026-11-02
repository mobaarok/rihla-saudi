// Finds a freely licensed photo on Wikimedia Commons for each place, saves a
// resized copy in public/photos/, and records the author and licence in
// src/data/photos.json so the site can credit it.
//
// Runs in GitHub Actions (.github/workflows/photos.yml). To run it yourself:
//   node scripts/fetch-photos.mjs            # only places without a photo
//   node scripts/fetch-photos.mjs --force    # redo every place
//
// To choose a specific photo, add it to scripts/photo-overrides.json:
//   { "hegra": "File:Exact name on Commons.jpg" }
// To remove a photo, set it to null: { "hegra": null }
// To block a bad pick and search again, list it in scripts/photo-rejects.json:
//   { "hegra": ["File:Wrong photo.jpg"] }
// A place's photoQuery can hold several searches separated by "|"; they are tried in order.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PLACES_DIR = path.join(ROOT, 'src/data/places');
const OUT_DIR = path.join(ROOT, 'public/photos');
const MANIFEST = path.join(ROOT, 'src/data/photos.json');
const OVERRIDES = path.join(ROOT, 'scripts/photo-overrides.json');
const CANDIDATES = path.join(ROOT, 'scripts/photo-candidates.json');
const REJECTS = path.join(ROOT, 'scripts/photo-rejects.json');
const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'RihlaSaudiPhotoBot/1.0 (https://github.com/mobaarok/rihla-saudi)';
const FORCE = process.argv.includes('--force');

// Licences that allow reuse on a website with credit.
const OK_LICENSE = /^(cc0|public domain|pd\b|cc[- ]by(-sa)?[- ]\d)/i;
const BAD_TITLE = /(map|logo|flag|diagram|plan|chart|coat of arms|stamp|banknote|\.svg|\.gif|\.tif)/i;

const readJson = (f, fallback) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : fallback);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

/** Pull { slug, query } pairs out of the place files. */
function readQueries() {
  const out = [];
  for (const file of fs.readdirSync(PLACES_DIR)) {
    if (!file.endsWith('.ts') || file === 'index.ts' || file === 'common.ts') continue;
    const src = fs.readFileSync(path.join(PLACES_DIR, file), 'utf8');
    let slug = null;
    for (const m of src.matchAll(/slug: '([^']+)'|photoQuery: '((?:[^'\\]|\\.)+)'/g)) {
      if (m[1]) slug = m[1];
      else if (slug) out.push({ slug, query: m[2].replace(/\\'/g, "'") });
    }
  }
  return out;
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (res.ok) return res.json();
    await sleep(2000 * (attempt + 1));
  }
  throw new Error(`Commons API failed: ${url}`);
}

function toCandidate(page) {
  const ii = page.imageinfo?.[0];
  if (!ii) return null;
  const meta = ii.extmetadata ?? {};
  return {
    title: page.title,
    width: ii.width,
    height: ii.height,
    mime: ii.mime,
    thumb: ii.thumburl ?? ii.url,
    source: ii.descriptionurl,
    credit: stripHtml(meta.Artist?.value) || 'Unknown author',
    license: stripHtml(meta.LicenseShortName?.value),
    licenseUrl: meta.LicenseUrl?.value,
    index: page.index ?? 999,
  };
}

const IMAGEINFO = { prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '1280' };

async function search(query) {
  const data = await api({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: '20',
    ...IMAGEINFO,
  });
  return (data.query?.pages ?? [])
    .map(toCandidate)
    .filter(Boolean)
    .sort((a, b) => a.index - b.index);
}

async function byTitle(title) {
  const data = await api({ action: 'query', titles: title, ...IMAGEINFO });
  return toCandidate(data.query?.pages?.[0] ?? {});
}

const STOP = new Set(['saudi', 'arabia', 'the', 'and', 'old', 'park', 'village', 'heritage', 'historic', 'town', 'city']);

/** The file name must mention the place (Arabic-only file names are allowed through). */
function relevant(c, query) {
  const title = c.title.toLowerCase();
  if (!/[a-z]/.test(title.replace(/^file:|\.(jpe?g|png|webp)$/g, ''))) return true;
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 4 && !STOP.has(w));
  return words.length === 0 || words.some((w) => title.includes(w.slice(0, 5)));
}

function usable(c) {
  return (
    c &&
    /jpeg|png|webp/.test(c.mime) &&
    c.width >= 1000 &&
    c.width / c.height >= 1.2 &&
    c.width / c.height <= 2.4 &&
    OK_LICENSE.test(c.license) &&
    !BAD_TITLE.test(c.title)
  );
}

async function save(slug, c) {
  const res = await fetch(c.thumb, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download failed ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 72 }).toFile(path.join(OUT_DIR, `${slug}.webp`));
  return {
    src: `/photos/${slug}.webp`,
    title: c.title,
    credit: c.credit.slice(0, 120),
    license: c.license,
    ...(c.licenseUrl && { licenseUrl: c.licenseUrl }),
    source: c.source,
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = readJson(MANIFEST, {});
  const overrides = readJson(OVERRIDES, {});
  const candidates = readJson(CANDIDATES, {});
  const rejects = readJson(REJECTS, {});
  const queries = readQueries();
  const known = new Set(queries.map((q) => q.slug));
  let added = 0;
  const missing = [];

  for (const { slug, query } of queries) {
    const override = overrides[slug];
    if (override === null) {
      delete manifest[slug];
      fs.rmSync(path.join(OUT_DIR, `${slug}.webp`), { force: true });
      continue;
    }
    const blocked = new Set(rejects[slug] ?? []);
    if (manifest[slug] && blocked.has(manifest[slug].title)) {
      delete manifest[slug];
      fs.rmSync(path.join(OUT_DIR, `${slug}.webp`), { force: true });
    }
    const wantsOverride = typeof override === 'string' && manifest[slug]?.title !== override;
    if (manifest[slug] && !FORCE && !wantsOverride) continue;

    try {
      let pick;
      if (typeof override === 'string') {
        pick = await byTitle(override);
        if (!pick || !OK_LICENSE.test(pick.license)) throw new Error(`override not usable: ${override} (${pick?.license})`);
      } else {
        const ok = [];
        for (const q of query.split('|').map((x) => x.trim()).filter(Boolean)) {
          const found = await search(q);
          ok.push(...found.filter((c) => usable(c) && relevant(c, q) && !blocked.has(c.title) && !ok.some((o) => o.title === c.title)));
          if (ok.length) break;
          await sleep(300);
        }
        candidates[slug] = ok.slice(0, 6).map((c) => ({ title: c.title, license: c.license }));
        pick = ok[0];
      }
      if (!pick) {
        missing.push(slug);
        console.log(`-  ${slug}: no usable photo for "${query}"`);
        continue;
      }
      manifest[slug] = await save(slug, pick);
      added++;
      console.log(`+  ${slug}: ${pick.title} (${pick.license})`);
    } catch (e) {
      missing.push(slug);
      console.log(`!  ${slug}: ${e.message}`);
    }
    await sleep(300);
  }

  // Drop photos for places that no longer exist.
  for (const slug of Object.keys(manifest)) if (!known.has(slug)) delete manifest[slug];

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
  fs.writeFileSync(CANDIDATES, JSON.stringify(candidates, null, 2) + '\n');
  console.log(`\nDone: ${added} added, ${Object.keys(sorted).length}/${queries.length} places have photos.`);
  if (missing.length) console.log(`Missing: ${missing.join(', ')}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
