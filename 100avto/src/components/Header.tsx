import { useEffect, useState } from 'react'
import Logo from './Logo'
import { company } from '../data/company'
import { useBooking } from '../booking'

const nav = [
  { href: '#top', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { book } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="100Авто — на главную" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Основная навигация">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm font-semibold text-paper/80 transition-colors hover:text-paper"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={company.phoneHref} className="hidden text-sm font-bold tracking-wide transition-colors hover:text-accent xl:block">
            {company.phone}
          </a>
          <button
            type="button"
            onClick={() => book()}
            className="btn btn-primary hidden !min-h-[44px] !px-5 !text-[.85rem] lg:inline-flex"
          >
            Записаться на обслуживание
          </button>

          <a
            href={company.phoneHref}
            aria-label="Позвонить"
            className="grid h-11 w-11 place-items-center border border-line text-accent lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
          </a>
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-line lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-paper transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-paper transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-ink px-5 pb-10 pt-6 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col" aria-label="Мобильная навигация">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-3xl font-medium uppercase tracking-wide"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setOpen(false)
              window.setTimeout(() => book(), 250)
            }}
          >
            Записаться на обслуживание
          </button>
          <a href={company.phoneHref} className="btn btn-ghost">{company.phone}</a>
          <a href={company.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Написать в Telegram</a>
        </div>
        <p className="mt-8 text-sm text-muted">{company.addressShort}</p>
      </div>
    </>
  )
}
