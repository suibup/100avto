import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface BookingCtx {
  service: string
  setService: (s: string) => void
  /** Прокручивает к форме записи и подставляет услугу. */
  book: (service?: string) => void
}

const Ctx = createContext<BookingCtx | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState('')

  const book = useCallback((s?: string) => {
    if (s) setService(s)
    const target = document.getElementById('booking')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      document.getElementById('f-name')?.focus({ preventScroll: true })
    }, 650)
  }, [])

  const value = useMemo(() => ({ service, setService, book }), [service, book])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useBooking() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useBooking must be used inside BookingProvider')
  return v
}
