import { company } from '../data/company'
import { useBooking } from '../booking'

export default function MobileBar() {
  const { book } = useBooking()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-ink/95 p-3 pb-[max(.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <a href={company.phoneHref} className="btn btn-primary !min-h-[52px]">Позвонить</a>
      <button type="button" onClick={() => book()} className="btn btn-ghost !min-h-[52px]">Записаться</button>
    </div>
  )
}
