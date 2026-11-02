import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// The site is exported as plain static files, so it can be hosted anywhere
// (GitHub Pages, Firebase Hosting, Vercel, Netlify).
// On GitHub Pages it lives under /rihla-saudi, so the build sets NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
