import { useState } from 'react'
import { serviceCategories } from '../data/services'
import ServiceIllustration from './ServiceIllustration'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { useBooking } from '../booking'

export default function Services() {
  const [active, setActive] = useState(serviceCategories[0].id)
  const { book } = useBooking()
  const cat = serviceCategories.find((c) => c.id === active) ?? serviceCategories[0]
  const idx = serviceCategories.indexOf(cat)

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Услуги" title="Каталог услуг">
          Выберите направление — внутри перечень работ. Стоимость уточняйте при записи.
        </SectionHead>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* tabs */}
          <Reveal className="min-w-0 lg:col-span-4">
            <div role="tablist" aria-label="Категории услуг" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
              {serviceCategories.map((c, i) => {
                const on = c.id === active
                return (
                  <button
                    key={c.id}
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={on}
                    aria-controls="service-panel"
                    onClick={() => setActive(c.id)}
                    className={`group flex shrink-0 items-center gap-4 border px-4 py-3.5 text-left transition-all lg:border-0 lg:border-b lg:border-line lg:px-0 lg:py-4 ${
                      on ? 'border-accent text-paper' : 'border-line text-paper/55 hover:text-paper'
                    }`}
                  >
                    <span className={`font-display text-sm tabular-nums transition-colors ${on ? 'text-accent' : 'text-white/25'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg font-medium uppercase tracking-wide whitespace-nowrap lg:whitespace-normal lg:text-xl">{c.title}</span>
                    <span className={`ml-auto hidden h-px transition-all lg:block ${on ? 'w-8 bg-accent' : 'w-0 bg-transparent group-hover:w-4 group-hover:bg-white/30'}`} />
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* panel */}
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${cat.id}`}
            key={cat.id}
            className="service-card min-w-0 lg:col-span-8"
            style={{ animation: 'panelIn .5s cubic-bezier(.2,.7,.2,1)' }}
          >
            <div className="relative overflow-hidden border border-line bg-panel">
              <div className="grid-lines absolute inset-0 opacity-70" />
              <div className="relative grid items-center gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-10">
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
                    {String(idx + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold uppercase sm:text-4xl">{cat.title}</h3>
                  <p className="mt-3 max-w-md text-paper/65">{cat.lead}</p>
                </div>
                <ServiceIllustration kind={cat.kind} className="ill mx-auto h-36 w-auto sm:h-44" />
              </div>
            </div>

            <ul className="mt-2">
              {cat.items.map((it) => (
                <li key={it.name} className="group grid gap-4 border-b border-line py-6 transition-colors hover:border-accent/50 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h4 className="text-lg font-bold">{it.name}</h4>
                    <p className="mt-1 max-w-xl text-[.95rem] leading-relaxed text-paper/60">{it.text}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => book(it.name)}
                    className="btn btn-ghost !min-h-[46px] !px-5 !text-sm sm:justify-self-end"
                    aria-label={`Записаться: ${it.name}`}
                  >
                    Записаться
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
