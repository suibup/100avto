import HeroVisual from './HeroVisual'
import { company } from '../data/company'
import { useBooking } from '../booking'

const Arrow = () => (
  <svg className="arrow h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Hero() {
  const { book } = useBooking()
  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-[72px]">
      <div className="grid-lines absolute inset-0 -z-10" />
      <div className="absolute -right-40 top-10 -z-10 h-[620px] w-[620px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute -left-32 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:px-8 lg:min-h-[min(760px,calc(100svh-72px))] lg:grid-cols-12 lg:gap-6 lg:pb-12 lg:pt-8">
        <div className="min-w-0 lg:col-span-7">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Автосервис в Уфе
          </p>

          <h1 className="font-display text-[2.1rem] font-semibold uppercase leading-[1.02] min-[420px]:text-[2.4rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[3.5rem] xl:text-[4.2rem]">
            <span className="line-mask"><span style={{ ['--d' as string]: '80ms' }}>Профессиональный</span></span>
            <span className="line-mask"><span style={{ ['--d' as string]: '200ms' }}>уход за вашим</span></span>
            <span className="line-mask"><span className="text-accent" style={{ ['--d' as string]: '320ms' }}>автомобилем</span></span>
          </h1>

          <p className="reveal is-in mt-7 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg" style={{ ['--d' as string]: '450ms' }}>
            Диагностика, ремонт двигателя, ходовой части и трансмиссии, автоэлектрика и техническое
            обслуживание. Запишитесь заранее — в удобное для вас время.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn btn-primary" onClick={() => book()}>
              Записаться <Arrow />
            </button>
            <a href="#services" className="btn btn-ghost">Наши услуги</a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-line pt-7 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Рейтинг в Яндекс Картах</dt>
              <dd className="mt-1.5 flex items-baseline gap-2">
                <a href={company.yandexReviews} target="_blank" rel="noopener noreferrer" className="font-display text-3xl font-semibold transition-colors hover:text-accent">
                  {company.rating}
                </a>
                <span className="text-sm text-muted">{company.ratingCount} оценок</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Адрес</dt>
              <dd className="mt-1.5 text-sm font-semibold leading-snug">{company.addressShort}</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-w-0 lg:col-span-5 xl:-mr-8">
          <div className="drift">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
