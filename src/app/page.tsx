import { SITE } from '@/config/site';
import { routing } from '@/i18n/routing';

// The root URL ("/") sends visitors to their language. Static hosting has no
// server, so this is a tiny HTML page: Arabic browsers go to /ar, everyone else to /en.
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const fallback = `${base}/${routing.defaultLocale}/`;
const script = `(function(){var l=(navigator.languages&&navigator.languages[0]||navigator.language||'').toLowerCase();location.replace('${base}/'+(l.indexOf('ar')===0?'ar':'${routing.defaultLocale}')+'/');})();`;

export const metadata = { title: SITE.name.en, robots: { index: false } };

export default function RootRedirect() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`1; url=${fallback}`} />
        <link rel="canonical" href={`${SITE.url}/${routing.defaultLocale}/`} />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '4rem 1rem' }}>
        <p>
          <a href={`${base}/en/`}>{SITE.name.en}</a> · <a href={`${base}/ar/`}>{SITE.name.ar}</a>
        </p>
      </body>
    </html>
  );
}
