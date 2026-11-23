import Logo from './Logo'
import { company } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-28 pt-14 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Автосервис в Уфе: диагностика, ремонт и техническое обслуживание автомобилей.
          </p>
        </div>
        <nav aria-label="Навигация в подвале" className="grid content-start gap-2.5 text-sm lg:col-span-3">
          {[['#services', 'Услуги'], ['#about', 'О компании'], ['#reviews', 'Отзывы'], ['#booking', 'Запись'], ['#contacts', 'Контакты']].map(([h, l]) => (
            <a key={h} href={h} className="text-paper/70 transition-colors hover:text-accent">{l}</a>
          ))}
        </nav>
        <address className="grid content-start gap-2.5 text-sm not-italic lg:col-span-4">
          <span className="text-paper/70">{company.addressShort}</span>
          <a href={company.phoneHref} className="font-bold hover:text-accent">{company.phone}</a>
          <a href={company.phone2Href} className="font-bold hover:text-accent">{company.phone2}</a>
          <a href={company.emailHref} className="text-paper/70 hover:text-accent">{company.email}</a>
        </address>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-line px-5 pt-6 text-xs leading-relaxed text-muted md:px-8">
        © {new Date().getFullYear()} 100Авто. Информация на сайте носит справочный характер и не является публичной офертой.
        Стоимость работ и график уточняйте у администратора.
      </div>
    </footer>
  )
}
