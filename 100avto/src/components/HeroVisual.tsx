const marks = [
  { x: 706, y: 206, tx: 716, ty: 96, label: 'ДВИГАТЕЛЬ' },
  { x: 318, y: 214, tx: 150, ty: 110, label: 'ЭЛЕКТРИКА' },
  { x: 640, y: 352, tx: 660, ty: 414, label: 'ПОДВЕСКА' },
  { x: 216, y: 352, tx: 70, ty: 414, label: 'ТОРМОЗА' },
]

function Wheel({ cx }: { cx: number }) {
  return (
    <g>
      <circle cx={cx} cy={300} r={58} className="stroke-paper" strokeWidth={2.5} fill="#0a0b0d" />
      <circle cx={cx} cy={300} r={44} className="stroke-white/25" strokeWidth={1} fill="none" />
      <g className="wheel-spin" style={{ transformOrigin: `${cx}px 300px` }}>
        {[0, 72, 144, 216, 288].map((a) => (
          <line
            key={a}
            x1={cx}
            y1={300}
            x2={cx}
            y2={262}
            className="stroke-white/60"
            strokeWidth={3}
            strokeLinecap="round"
            transform={`rotate(${a} ${cx} 300)`}
          />
        ))}
      </g>
      <circle cx={cx} cy={300} r={12} className="stroke-accent" strokeWidth={3} fill="#0a0b0d" />
    </g>
  )
}

export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 820 440"
      className="h-auto w-full"
      role="img"
      aria-label="Схематичное изображение автомобиля с направлениями обслуживания"
    >
      <defs>
        <linearGradient id="scanGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#ff5a1f" stopOpacity="0" />
          <stop offset="1" stopColor="#ff5a1f" stopOpacity=".35" />
        </linearGradient>
        <clipPath id="bodyClip">
          <path d="M70 300H146A70 70 0 0 1 286 300H570A70 70 0 0 1 710 300H786V272C786 246 770 228 742 222L676 208C650 166 610 132 560 124C500 116 430 118 372 128C312 140 268 172 236 212L118 230C88 236 70 248 70 272Z" />
        </clipPath>
      </defs>

      {/* ground line */}
      <line x1="20" y1="358" x2="800" y2="358" className="stroke-white/10" strokeDasharray="4 8" />

      {/* body */}
      <path
        d="M70 300H146A70 70 0 0 1 286 300H570A70 70 0 0 1 710 300H786V272C786 246 770 228 742 222L676 208C650 166 610 132 560 124C500 116 430 118 372 128C312 140 268 172 236 212L118 230C88 236 70 248 70 272Z"
        fill="#101216"
        className="stroke-paper"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      {/* glass */}
      <path d="M262 208C290 176 322 156 372 146L468 142V208Z" className="stroke-white/50" strokeWidth={1.5} fill="rgba(255,255,255,.03)" />
      <path d="M486 142C530 142 566 146 590 156C620 170 640 190 656 208H486Z" className="stroke-white/50" strokeWidth={1.5} fill="rgba(255,255,255,.03)" />
      {/* lines */}
      <path d="M118 230H742" className="stroke-white/20" strokeWidth={1.2} />
      <path d="M477 142V292M300 212V290" className="stroke-white/20" strokeWidth={1.2} />
      <path d="M496 244H530M320 244H354" className="stroke-white/40" strokeWidth={3} strokeLinecap="round" />
      {/* lights */}
      <path d="M744 238L782 242" className="stroke-accent" strokeWidth={4} strokeLinecap="round" />
      <path d="M76 252L104 248" className="stroke-accent" strokeWidth={4} strokeLinecap="round" />

      {/* scan */}
      <g clipPath="url(#bodyClip)">
        <g className="scan">
          <rect x="-90" y="100" width="90" height="220" fill="url(#scanGrad)" />
          <line x1="0" y1="100" x2="0" y2="320" className="stroke-accent" strokeWidth={2} />
        </g>
      </g>

      <Wheel cx={216} />
      <Wheel cx={640} />

      {/* callouts */}
      {marks.map((m, i) => (
        <g key={m.label}>
          <circle cx={m.x} cy={m.y} r={5} className="fill-accent" />
          <circle cx={m.x} cy={m.y} r={10} className="pulse-dot fill-accent/40" style={{ animationDelay: `${i * 0.5}s` }} />
          <path
            d={`M${m.x} ${m.y}L${m.tx} ${m.ty + (m.ty > 300 ? -14 : 8)}`}
            className="stroke-accent/70"
            strokeWidth={1.2}
            fill="none"
          />
          <text
            x={m.tx}
            y={m.ty}
            className="fill-paper font-display"
            fontSize="15"
            letterSpacing="2.4"
          >
            {m.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
