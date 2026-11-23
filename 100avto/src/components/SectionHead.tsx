import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHead({
  eyebrow, title, children, className = '',
}: { eyebrow: string; title: string; children?: ReactNode; className?: string }) {
  return (
    <Reveal className={className}>
      <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-accent">
        <span className="h-px w-10 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">{children}</p>}
    </Reveal>
  )
}
