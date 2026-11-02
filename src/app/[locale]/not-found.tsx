import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const tr = useTranslations('notFound');
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p className="text-6xl" aria-hidden>
        🏜️
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold">{tr('title')}</h1>
      <Link href="/" className="mt-6 inline-block rounded-full bg-palm-600 px-6 py-3 font-semibold text-white">
        {tr('back')}
      </Link>
    </div>
  );
}
