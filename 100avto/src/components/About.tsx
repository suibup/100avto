import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { serviceCategories } from '../data/services'

const total = serviceCategories.reduce((n, c) => n + c.items.length, 0)

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead eyebrow="О компании" title="Ваш автомобиль в надёжных руках" />
          <Reveal delay={120} className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-paper/70 sm:text-lg">
            <p>
              «100Авто» — автосервис в Уфе, где вашему автомобилю уделяют внимание на каждом этапе:
              от диагностики и поиска причины неисправности до ремонта и планового обслуживания.
            </p>
            <p>
              Мы работаем по нескольким направлениям: двигатель, ходовая часть, трансмиссия,
              автоэлектрика, автокондиционеры и техническое обслуживание. Это позволяет решить
              большинство задач в одном месте, не переезжая из сервиса в сервис.
            </p>
            <p>
              Удобно записаться заранее — по телефону, в Telegram или через форму на сайте.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5 lg:pt-28">
          <div className="border border-line bg-panel p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-6xl font-semibold text-accent">{serviceCategories.length}</p>
                <p className="mt-2 text-sm text-muted">направлений обслуживания и ремонта</p>
              </div>
              <div>
                <p className="font-display text-6xl font-semibold">{total}</p>
                <p className="mt-2 text-sm text-muted">видов работ в каталоге</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[.95rem]">
              {['Диагностика и ремонт двигателя', 'Ходовая часть и трансмиссия', 'Автоэлектрика и кондиционеры', 'Техническое обслуживание'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
