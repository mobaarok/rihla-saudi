import { getLocale, getTranslations } from 'next-intl/server';
import { SITE } from '@/config/site';
import { t } from '@/lib/content';

export default async function Footer() {
  const tr = await getTranslations('footer');
  const locale = await getLocale();
  return (
    <footer className="mt-20 border-t border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-10 text-sm text-muted">
        <p className="font-display text-lg text-ink">{t(SITE.name, locale)}</p>
        <p>{tr('about')}</p>
        <p>{tr('disclaimer')}</p>
        <p className="text-xs">{tr('mapData')}</p>
        <p className="text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
