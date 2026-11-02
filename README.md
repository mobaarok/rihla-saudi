# Rihla Saudi

A bilingual (English and Arabic) travel guide to Saudi Arabia's 13 regions, with a personal "travel passport" map.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, **next-intl** and **Firebase** (sign-in and Firestore).

![Home page](docs/screenshots/home-en.png)

## What's in the site

| Page | URL | What it does |
|---|---|---|
| Home | `/en`, `/ar` | Hero with search, featured places, all 13 regions |
| Explore | `/en/regions` | Region cards |
| Region | `/en/regions/asir` | Getting there, region quiz, places with category filters |
| Place | `/en/places/hegra` | Photo, description, "Plan your visit" (best time, time needed, entry, getting there, nearest airport), tips, map |
| Map | `/en/map` | Every place on one map |
| Search | `/en/search?q=fort` | Search places and regions in English or Arabic |
| Getting around | `/en/getting-around` | Flights, trains, buses, city transport, driving, visas, airports, distances |
| Quizzes | `/en/quiz`, `/en/quiz/hail` | 5 questions per region; score 4+ to earn a passport badge |
| Passport | `/en/passport` | Click regions to colour them in, progress stats, quiz badges |
| Photo credits | `/en/credits` | Author and licence for every photo |
| Saved | `/en/saved` | Places the user saved |
| Sign in | `/en/login` | Google, or email and password |
| Profile | `/en/profile` | Stats and sign out |

- **Works without an account.** Saved and visited places are kept in the browser. When the user signs in, they move into their Firestore account automatically.
- **SEO.** Every page is pre-rendered, with titles, descriptions, English/Arabic alternate links, a `sitemap.xml`, `robots.txt` and schema.org `TouristAttraction` data on each place.
- **Right-to-left.** The Arabic pages use `dir="rtl"` and an Arabic font.

## Run it on your computer

You need [Node.js 20 or newer](https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000 (it redirects to /en/ or /ar/).

## Firebase setup (one time)

The web config is already in `.env`. You only need to do this in the [Firebase console](https://console.firebase.google.com/project/rihla-saudi):

1. **Authentication → Sign-in method:** turn on **Google** and **Email/Password**.
2. **Authentication → Settings → Authorized domains:** add your live domain when you deploy (for example `rihla-saudi.vercel.app`). `localhost` is already allowed.
3. **Firestore Database:** click **Create database** (production mode, a region near your users, e.g. `me-central2`, Dammam).
4. **Deploy the security rules** in `firestore.rules`. Re-publish them whenever that file changes (version 2 added `quizScores`). They let each user read and write only their own document:

   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules
   ```

   Or paste the contents of `firestore.rules` into **Firestore → Rules** and click **Publish**.

### Data model

One document per user at `users/{uid}`:

```json
{
  "displayName": "…",
  "email": "…",
  "saved": ["hegra", "farasan-islands"],
  "visitedPlaces": ["hegra"],
  "visitedRegions": ["asir", "riyadh"],
  "quizScores": { "hail": 5, "asir": 3 },
  "updatedAt": "<timestamp>"
}
```

## Deploy

The site is exported as static files (`npm run build` writes them to `out/`), so it can be hosted anywhere.

### GitHub Pages (set up, `gh-pages` branch)

Work on `main`, then bring the changes into this branch to publish them:

```bash
git checkout gh-pages
git merge main
git push
```

This `gh-pages` branch holds the GitHub Pages version: the same site as `main`, plus static export (no middleware), a root page that picks the language, and the `/rihla-saudi` base path. Every push to `gh-pages` builds and publishes it with `.github/workflows/deploy.yml`:

**https://mobaarok.github.io/rihla-saudi/**

For sign-in to work there, add `mobaarok.github.io` to Firebase **Authentication → Settings → Authorized domains**.

### Your own domain later

When you buy a domain, you can point it at GitHub Pages (repo **Settings → Pages → Custom domain**) or host the `out/` folder on Firebase Hosting, Vercel or Netlify. Then:

1. Remove `NEXT_PUBLIC_BASE_PATH` from the workflow, because a custom domain has no `/rihla-saudi` path.
2. Set `NEXT_PUBLIC_SITE_URL` to the new domain.
3. Add the domain to Firebase **Authorized domains**.
4. Submit `https://YOUR-DOMAIN/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Editing content

- **Site name:** `src/config/site.ts`
- **Default language:** `src/i18n/routing.ts` (`defaultLocale: 'ar'` makes the site Arabic-first)
- **Interface text:** `src/messages/en.json` and `src/messages/ar.json`
- **Regions:** `src/data/regions.ts`
- **Places:** `src/data/places/*.ts`, one file per area. Copy an existing entry and give it a unique `slug`. It automatically gets its own page, a sitemap entry, a map pin and search results.
- **Cities, airports and train stops:** `src/data/cities.ts`
- **Transport guide:** `src/data/transport.ts`
- **Quizzes:** `src/data/quizzes.ts` (`answer` is the index of the correct option; options are shuffled on screen)

### Photos

Photos come from Wikimedia Commons, with their author and licence, through the **Fetch place photos** workflow (`.github/workflows/photos.yml` running `scripts/fetch-photos.mjs`). It runs automatically when places change on `main`, and only for places without a photo.

- **Find a photo for a new place:** give the place a `photoQuery` (several searches can be separated by `|`), then push to `main`.
- **Choose a specific photo:** add `"slug": "File:Exact name.jpg"` to `scripts/photo-overrides.json`.
- **Remove a photo:** set it to `null` in the same file. The place then shows its illustrated cover.
- **Block a bad pick and search again:** add its file name to `scripts/photo-rejects.json`.
- **Always check new picks by eye.** Search sometimes finds the wrong place.
- **Use your own photos:** put them in `public/photos/<slug>.webp`, add an entry to `src/data/photos.json`, and set the override to `null` so the workflow doesn't replace it.

## ⚠️ Before launch

- **Check every fact.** Descriptions are drafts. Verify them against official sources such as visitsaudi.com, the Ministry of Culture and UNESCO.
- **Check coordinates and distances.** Map pins and "km from city" values are approximate.
- **Check the transport guide.** Train stations, airports, distances and visa rules (`src/data/transport.ts`, `src/data/cities.ts`) change often.
- **Check the quiz answers.**
- **Get the Arabic reviewed.** A native speaker should check all Arabic text.
- **Map tiles:** the free CARTO tiles in `src/components/PlacesMap.tsx` are for low traffic. For real traffic, move to a paid plan (MapTiler, Stadia or CARTO).

## Credits

- Region boundaries: [Natural Earth](https://www.naturalearthdata.com/) (public domain), simplified in `src/data/regionPaths.ts`.
- Map tiles: © OpenStreetMap contributors, © CARTO.

## Next steps

- **Phase 4 (later):** AI trip planner. It needs Firebase Cloud Functions (Blaze plan) to keep the Claude API key secret, because GitHub Pages can't run server code.
- **Phase 6 (later):** affiliate links for hotels and tours.
- Better photos for the 33 places that still use cover art
- More places
