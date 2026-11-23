import { company } from '../data/company'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { useBooking } from '../booking'

const rows = [
  { k: 'Адрес', v: company.addressShort, href: company.yandexOrg, ext: true },
  { k: 'Телефон', v: company.phone, href: company.phoneHref },
  { k: 'Дополнительный телефон', v: company.phone2, href: company.phone2Href },
  { k: 'Email', v: company.email, href: company.emailHref },
  { k: 'Telegram', v: 'Написать в Telegram', href: company.telegram, ext: true },
]

export default function Contacts() {
  const { book } = useBooking()
  return (
    <section id="contacts" className="border-t border-line bg-graphite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Контакты" title="Как нас найти" />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <dl className="border-t border-line">
              {rows.map((r) => (
                <div key={r.k} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[170px_1fr]">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted sm:pt-1">{r.k}</dt>
                  <dd>
                    <a
                      href={r.href}
                      {...(r.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-lg font-bold transition-colors hover:text-accent"
                    >
                      {r.v}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[170px_1fr]">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted sm:pt-1">График работы</dt>
                <dd className="text-paper/80">Уточняйте по телефону или в Telegram</dd>
              </div>
            </dl>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={company.phoneHref} className="btn btn-primary">Позвонить</a>
              <a href={company.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Написать в Telegram</a>
              <a href={company.yandexRoute} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Построить маршрут</a>
              <button type="button" onClick={() => book()} className="btn btn-ghost">Записаться</button>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative h-[380px] overflow-hidden border border-line bg-panel sm:h-[480px] lg:h-full lg:min-h-[520px]">
              <iframe
                title="Карта: автосервис 100Авто, Уфа, ул. 50-летия Октября, 13"
                src={company.yandexMapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Не загрузилась карта?{' '}
              <a href={company.yandexOrg} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-accent underline-offset-4 hover:text-accent">
                Открыть организацию в Яндекс Картах
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
