import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import PageHeader from '@/components/PageHeader';
import { cities, getRegion, regions, t } from '@/lib/content';
import { distances, railLines, sections } from '@/data/transport';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: 'transport' });
  return {
    title: tr('title'),
    description: tr('subtitle'),
    alternates: {
      canonical: `/${locale}/getting-around`,
      languages: { en: '/en/getting-around', ar: '/ar/getting-around' },
    },
  };
}

export default async function GettingAroundPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations('transport');
  const airports = cities.filter((c) => c.airport);

  return (
    <>
      <PageHeader title={tr('title')} subtitle={tr('subtitle')} />

      <div className="mx-auto max-w-5xl px-4 pt-8">
        {/* Jump links */}
        <nav className="flex flex-wrap gap-2" aria-label={tr('onThisPage')}>
          {[...sections.slice(0, 2), { id: 'airports', icon: '🛬', title: { en: 'Airports', ar: 'المطارات' } }, ...sections.slice(2), { id: 'distances', icon: '📏', title: { en: 'Driving distances', ar: 'مسافات القيادة' } }].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-sand-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-sand-100"
            >
              {s.icon} {t(s.title, locale)}
            </a>
          ))}
        </nav>

        <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">⚠️ {tr('verify')}</p>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 pt-12">
            <h2 className="font-display text-2xl font-semibold">
              <span aria-hidden>{s.icon}</span> {t(s.title, locale)}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-3 text-lg leading-relaxed text-ink/85">
                {t(p, locale)}
              </p>
            ))}
            {s.tips && (
              <ul className="mt-4 space-y-2">
                {s.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 rounded-xl bg-white p-3 ring-1 ring-sand-200">
                    <span aria-hidden>✔️</span>
                    <span>{t(tip, locale)}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.id === 'trains' && (
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {railLines.map((line) => (
                  <div key={line.id} className="rounded-2xl border border-sand-200 bg-white p-5">
                    <h3 className="font-semibold">{t(line.name, locale)}</h3>
                    <p className="mt-2 text-sm text-muted">{t(line.about, locale)}</p>
                    <ol className="mt-4 space-y-1.5 border-s-2 border-palm-500 ps-4 text-sm">
                      {line.stations.map((st) => (
                        <li key={st.en} className="relative">
                          <span className="absolute -start-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-palm-600" aria-hidden />
                          {t(st, locale)}
                        </li>
                      ))}
                    </ol>
                    <a href={line.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-palm-600 hover:underline">
                      {line.operator} ↗
                    </a>
                  </div>
                ))}
              </div>
            )}

            {s.links && (
              <div className="mt-4 flex flex-wrap gap-3">
                {s.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-palm-600 hover:underline">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}

            {s.id === 'trains' && (
              <section id="airports" className="scroll-mt-24 pt-12">
                <h2 className="font-display text-2xl font-semibold">
                  <span aria-hidden>🛬</span> {tr('airportsTitle')}
                </h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-sand-200 bg-white">
                  <table className="w-full text-start text-sm">
                    <thead className="bg-sand-100 text-xs uppercase tracking-wide text-muted">
                      <tr>
                        <th className="p-3 text-start">{tr('region')}</th>
                        <th className="p-3 text-start">{tr('city')}</th>
                        <th className="p-3 text-start">{tr('airport')}</th>
                        <th className="p-3 text-start">{tr('code')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-200">
                      {airports.map((c) => (
                        <tr key={c.slug}>
                          <td className="p-3">
                            <Link href={`/regions/${c.region}`} className="text-palm-600 hover:underline">
                              {t(getRegion(c.region)!.name, locale)}
                            </Link>
                          </td>
                          <td className="p-3 font-medium">{t(c.name, locale)}</td>
                          <td className="p-3">{t(c.airport!.name, locale)}</td>
                          <td className="p-3 font-mono" dir="ltr">
                            {c.airport!.code}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </section>
        ))}

        <section id="distances" className="scroll-mt-24 pt-12">
          <h2 className="font-display text-2xl font-semibold">
            <span aria-hidden>📏</span> {tr('distancesTitle')}
          </h2>
          <p className="mt-2 text-muted">{tr('distancesNote')}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {distances.map((d) => (
              <div key={d.from.en + d.to.en} className="flex items-center justify-between rounded-xl bg-white p-3 ring-1 ring-sand-200">
                <span>
                  {t(d.from, locale)} ↔ {t(d.to, locale)}
                </span>
                <span className="font-semibold text-palm-700">{tr('km', { km: d.km })}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-12">
          <h2 className="font-display text-2xl font-semibold">{tr('byRegion')}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map((r) => (
              <Link
                key={r.slug}
                href={`/regions/${r.slug}`}
                className="rounded-full bg-palm-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-palm-700"
              >
                {t(r.name, locale)}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
