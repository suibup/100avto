import type { ReactNode } from 'react'
import type { IllustrationKind } from '../data/services'

const A = 'stroke-accent'
const L = 'stroke-paper/70'
const D = 'stroke-white/20'

function Gear({ cx, cy, r, className = L }: { cx: number; cy: number; r: number; className?: string }) {
  const circ = 2 * Math.PI * (r + 6)
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 6} fill="none" className={className} strokeWidth={9} strokeDasharray={`${circ / 28} ${circ / 28}`} />
      <circle cx={cx} cy={cy} r={r} fill="#101216" className={className} strokeWidth={2} />
      <circle cx={cx} cy={cy} r={r * 0.35} fill="none" className={A} strokeWidth={2.5} />
    </g>
  )
}

const art: Record<IllustrationKind, ReactNode> = {
  diagnostics: (
    <g fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="40" y="34" width="200" height="120" rx="3" className={L} />
      <rect x="52" y="46" width="176" height="96" className={D} />
      <path d="M52 98h46l10-28 16 56 14-40 10 12h80" className={A} strokeWidth={3} />
      <path d="M110 154v18M170 154v18M90 172h100" className={L} />
      <circle cx="64" cy="58" r="3" className={A} />
      <path d="M78 58h30M52 130h40" className={D} />
    </g>
  ),
  engine: (
    <g fill="none" strokeWidth={2} strokeLinejoin="round">
      <rect x="48" y="62" width="184" height="84" rx="3" className={L} />
      <rect x="60" y="40" width="160" height="22" className={D} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={64 + i * 44} y="76" width="32" height="40" className={D} />
          <rect x={72 + i * 44} y="88" width="16" height="28" className={A} strokeWidth={2.5} />
        </g>
      ))}
      <path d="M48 146h184v14H48z" className={L} />
      <path d="M232 100h22v24h-22M26 100h22" className={D} />
      <path d="M96 40v-16h24M164 40v-16h-24" className={L} />
    </g>
  ),
  suspension: (
    <g fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M140 24v22" className={L} />
      <rect x="128" y="46" width="24" height="26" className={L} />
      <path d="M140 72l-30 10 60 14-60 14 60 14-60 14 60 14-30 10" className={A} />
      <rect x="128" y="154" width="24" height="12" className={L} />
      <path d="M140 166v8" className={L} />
      <circle cx="140" cy="186" r="2" className={D} />
      <path d="M96 40h-30M184 40h30" className={D} />
      <path d="M98 60c-26 12-30 52-30 90M182 60c26 12 30 52 30 90" className={D} strokeDasharray="4 6" />
    </g>
  ),
  transmission: (
    <g fill="none">
      <Gear cx={104} cy={100} r={44} />
      <Gear cx={186} cy={74} r={26} className={A} />
      <Gear cx={192} cy={140} r={22} />
      <path d="M30 100h18M30 100v-30" className={D} strokeWidth={2} />
    </g>
  ),
  electrics: (
    <g fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="54" y="70" width="140" height="82" rx="3" className={L} />
      <rect x="76" y="56" width="26" height="14" className={L} />
      <rect x="146" y="56" width="26" height="14" className={L} />
      <path d="M130 84l-24 36h22l-10 28 30-40h-22z" className={A} strokeWidth={2.5} fill="rgba(255,90,31,.12)" />
      <path d="M194 111h26c10 0 14-8 14-18M54 111H34" className={D} />
      <path d="M89 56V36M159 56V28h40" className={D} />
      <circle cx="234" cy="93" r="4" className={A} />
    </g>
  ),
  maintenance: (
    <g fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M96 34C96 34 56 84 56 114a40 40 0 0 0 80 0C136 84 96 34 96 34Z" className={A} strokeWidth={2.5} fill="rgba(255,90,31,.1)" />
      <path d="M76 118a20 20 0 0 0 16 20" className={L} />
      <rect x="168" y="70" width="64" height="94" rx="3" className={L} />
      <path d="M168 88h64M168 146h64" className={D} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${178 + i * 11} 94v46`} className={D} />
      ))}
      <path d="M190 70v-12h20v12" className={L} />
    </g>
  ),
  climate: (
    <g fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      {[0, 60, 120].map((a) => (
        <g key={a} transform={`rotate(${a} 140 100)`}>
          <path d="M140 38v124" className={L} />
          <path d="M128 52l12 10 12-10M128 148l12-10 12 10" className={A} />
        </g>
      ))}
      <circle cx="140" cy="100" r="68" className={D} strokeDasharray="3 7" strokeWidth={1.5} />
      <circle cx="140" cy="100" r="6" className={A} />
    </g>
  ),
  extra: (
    <g fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="110" cy="104" r="62" className={L} />
      <circle cx="110" cy="104" r="44" className={D} />
      <circle cx="110" cy="104" r="12" className={A} strokeWidth={3} />
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx={110 + 28 * Math.cos((a * Math.PI) / 180)} cy={104 + 28 * Math.sin((a * Math.PI) / 180)} r="3.5" className={L} />
      ))}
      <path d="M186 40l30 30-70 70-14 4 4-14z" className={A} strokeWidth={2.5} />
      <path d="M206 50l8-8 14 14-8 8" className={L} />
    </g>
  ),
}

export default function ServiceIllustration({ kind, className = '' }: { kind: IllustrationKind; className?: string }) {
  return (
    <svg viewBox="0 0 280 200" className={className} role="img" aria-hidden="true" focusable="false">
      {art[kind]}
    </svg>
  )
}
