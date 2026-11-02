import { SITE } from '@/config/site';

// Becomes 404.html in the static export (used by GitHub Pages for unknown URLs).
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '5rem 1rem',
          background: '#fbf8f3',
          color: '#1f1a14',
        }}
      >
        <p style={{ fontSize: '3rem', margin: 0 }}>🏜️</p>
        <h1>Page not found · الصفحة غير موجودة</h1>
        <p>
          <a href={`${base}/en/`} style={{ color: '#17633f' }}>
            {SITE.name.en}
          </a>
          {' · '}
          <a href={`${base}/ar/`} style={{ color: '#17633f' }}>
            {SITE.name.ar}
          </a>
        </p>
      </body>
    </html>
  );
}
