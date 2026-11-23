import { brands } from '../data/brands'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Brands() {
  return (
    <section id="brands" className="border-y border-line bg-graphite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Автомобили" title="Работаем с разными марками">
          Обслуживаем автомобили популярных европейских, японских, корейских и китайских брендов.
        </SectionHead>

        <ul className="mt-14 grid grid-cols-2 border-l border-t border-line sm:grid-cols-4">
          {brands.map((b, i) => (
            <Reveal as="li" key={b} delay={(i % 4) * 60} className="group relative flex h-24 items-center justify-center border-b border-r border-line px-3 sm:h-32">
              <span className="font-display text-xl font-medium uppercase tracking-[0.12em] text-paper/60 transition-all duration-300 group-hover:scale-105 group-hover:text-paper sm:text-2xl">
                {b}
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted">
          Названия марок указаны для обозначения автомобилей, с которыми работает сервис, и не означают
          официального дилерского статуса. Если вашей марки нет в списке — уточните по телефону.
        </p>
      </div>
    </section>
  )
}
