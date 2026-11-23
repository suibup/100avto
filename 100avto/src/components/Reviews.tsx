import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { company } from '../data/company'

export default function Reviews() {
  return (
    <section id="reviews" className="border-y border-line bg-graphite py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12">
        <SectionHead className="lg:col-span-6" eyebrow="Отзывы" title="Что говорят клиенты">
          Оценки и отзывы клиентов собраны на Яндекс Картах — там можно прочитать их целиком и
          поделиться своим мнением.
        </SectionHead>

        <Reveal delay={150} className="lg:col-span-6">
          <div className="relative overflow-hidden border border-line bg-panel p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-[80px]" />
            <div className="relative flex items-end gap-6">
              <p className="font-display text-8xl font-semibold leading-none sm:text-9xl">{company.rating}</p>
              <div className="pb-2">
                <div className="flex gap-1" role="img" aria-label="Рейтинг 4,7 из 5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <defs>
                        <linearGradient id={`st${s}`}>
                          <stop offset={s <= 4 ? '100%' : '70%'} stopColor="#ff5a1f" />
                          <stop offset={s <= 4 ? '100%' : '70%'} stopColor="#2c3037" />
                        </linearGradient>
                      </defs>
                      <path fill={`url(#st${s})`} d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted">{company.ratingCount} оценок на Яндекс Картах</p>
              </div>
            </div>
            <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={company.yandexReviews} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Читать отзывы на Яндекс Картах
              </a>
              <a href={company.yandexOrg} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Карточка организации
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
