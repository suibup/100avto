import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { serviceCategories } from '../data/services'
import { useBooking } from '../booking'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

interface Values { name: string; phone: string; car: string; comment: string }
type Errors = Partial<Record<'name' | 'phone', string>>

const empty: Values = { name: '', phone: '', car: '', comment: '' }

const field =
  'w-full border border-line bg-ink px-4 py-3.5 text-base text-paper placeholder:text-paper/30 transition-colors focus:border-accent focus:outline-none'

export default function BookingForm() {
  const { service, setService } = useBooking()
  const [v, setV] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [message, setMessage] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setV((p) => ({ ...p, [k]: e.target.value }))
    if (k in errors) setErrors((p) => ({ ...p, [k]: undefined }))
  }

  const buildMessage = () =>
    [
      'Заявка на обслуживание — 100Авто',
      `Имя: ${v.name.trim()}`,
      `Телефон: ${v.phone.trim()}`,
      `Автомобиль: ${v.car.trim() || 'не указан'}`,
      `Услуга: ${service || 'не выбрана'}`,
      v.comment.trim() ? `Комментарий: ${v.comment.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')

  const tgUrl = (text: string) => `${company.telegram}?text=${encodeURIComponent(text)}`
  const mailUrl = (text: string) =>
    `${company.emailHref}?subject=${encodeURIComponent('Заявка на обслуживание — 100Авто')}&body=${encodeURIComponent(text)}`

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (v.name.trim().length < 2) next.name = 'Укажите имя'
    const digits = v.phone.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 12) next.phone = 'Укажите телефон для связи'
    setErrors(next)
    if (Object.keys(next).length) return

    const text = buildMessage()
    setMessage(text)
    void copy(text)
    window.open(tgUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="booking" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute -right-32 top-20 -z-10 h-[460px] w-[460px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="Запись" title="Записаться на обслуживание">
            Заполните форму — мы подготовим заявку и откроем Telegram, чтобы вы отправили её в один клик.
            Или просто позвоните.
          </SectionHead>
          <Reveal delay={120} className="mt-8 space-y-3">
            <a href={company.phoneHref} className="btn btn-ghost w-full justify-between sm:w-auto">
              <span>Позвонить</span>
              <span className="font-display tracking-wide">{company.phone}</span>
            </a>
            <p className="text-sm text-muted">
              Заявка отправляется через Telegram: в открывшемся чате нужно нажать «Отправить».
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <form onSubmit={onSubmit} noValidate className="border border-line bg-panel p-6 sm:p-10" aria-label="Форма записи на обслуживание">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="f-name" className="mb-2 block text-sm font-semibold">Имя *</label>
                <input id="f-name" name="name" autoComplete="name" value={v.name} onChange={set('name')} className={field} placeholder="Как к вам обращаться" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
                {errors.name && <p id="e-name" role="alert" className="mt-1.5 text-sm text-accent">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="f-phone" className="mb-2 block text-sm font-semibold">Телефон *</label>
                <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} className={field} placeholder="+7 (___) ___-__-__" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'e-phone' : undefined} />
                {errors.phone && <p id="e-phone" role="alert" className="mt-1.5 text-sm text-accent">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="f-car" className="mb-2 block text-sm font-semibold">Марка и модель автомобиля</label>
                <input id="f-car" name="car" value={v.car} onChange={set('car')} className={field} placeholder="Например, Kia Rio" />
              </div>
              <div>
                <label htmlFor="f-service" className="mb-2 block text-sm font-semibold">Интересующая услуга</label>
                <select id="f-service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={`${field} appearance-none`}>
                  <option value="">Выберите услугу</option>
                  {serviceCategories.map((c) => (
                    <optgroup key={c.id} label={c.title}>
                      {c.items.map((i) => (
                        <option key={`${c.id}-${i.name}`} value={`${c.title}: ${i.name}`}>{i.name}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Другое / нужна консультация">Другое / нужна консультация</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="f-comment" className="mb-2 block text-sm font-semibold">Комментарий</label>
                <textarea id="f-comment" name="comment" rows={4} value={v.comment} onChange={set('comment')} className={`${field} resize-y`} placeholder="Опишите проблему или удобное время визита" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">Подготовить заявку в Telegram</button>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Нажимая кнопку, вы соглашаетесь передать указанные данные автосервису для связи по заявке.
            </p>

            {message && (
              <div role="status" className="mt-8 border border-accent/50 bg-accent/5 p-5">
                <p className="font-bold">Заявка подготовлена, но ещё не отправлена</p>
                <p className="mt-1 text-sm text-paper/70">
                  Мы открыли Telegram с готовым текстом — нажмите «Отправить» в чате. Если чат не открылся,
                  воспользуйтесь кнопками ниже.
                </p>
                <pre className="mt-4 whitespace-pre-wrap border border-line bg-ink p-4 font-sans text-sm text-paper/80">{message}</pre>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a href={tgUrl(message)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[46px] !text-sm">Открыть Telegram</a>
                  <a href={mailUrl(message)} className="btn btn-ghost !min-h-[46px] !text-sm">Отправить по e-mail</a>
                  <button type="button" onClick={() => copy(message)} className="btn btn-ghost !min-h-[46px] !text-sm">
                    {copied ? 'Скопировано' : 'Скопировать текст'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
