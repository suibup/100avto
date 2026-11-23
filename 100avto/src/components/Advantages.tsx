import Reveal from './Reveal'
import SectionHead from './SectionHead'

const items = [
  { t: 'Комплексное обслуживание автомобилей', d: 'От планового ТО до сложного ремонта — основные работы выполняются в одном месте.' },
  { t: 'Современная диагностика', d: 'Компьютерная диагностика и эндоскопия двигателя помогают определить причину неисправности.' },
  { t: 'Различные направления ремонта', d: 'Двигатель, ходовая часть, трансмиссия, автоэлектрика, кондиционеры и другие работы.' },
  { t: 'Работа с автомобилями разных марок', d: 'Обслуживаем европейские, японские, корейские и китайские автомобили.' },
  { t: 'Возможность предварительной записи', d: 'Оставьте заявку на сайте, позвоните или напишите в Telegram — согласуем удобное время.' },
]

export default function Advantages() {
  return (
    <section id="advantages" className="relative border-y border-line bg-graphite py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <SectionHead className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start" eyebrow="Преимущества" title="Что вы получаете">
          Понятный сервис без лишнего: честный подход к диагностике и удобная запись.
        </SectionHead>

        <ol className="lg:col-span-7">
          {items.map((it, i) => (
            <Reveal as="li" key={it.t} delay={i * 70} className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-7 transition-colors last:border-b hover:border-accent/60 sm:gap-x-10">
              <span className="font-display text-4xl font-light leading-none text-white/20 transition-colors group-hover:text-accent sm:text-5xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium uppercase tracking-wide sm:text-[1.7rem]">{it.t}</h3>
                <p className="mt-2 max-w-xl text-[.95rem] leading-relaxed text-paper/60">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
