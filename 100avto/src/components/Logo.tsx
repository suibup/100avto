export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="8" fill="#17191d" />
        <path d="M9 27 17 21H21V51H15V28Z" fill="#ff5a1f" />
        <ellipse cx="34" cy="36" rx="6" ry="12.5" fill="none" stroke="#f4f1ec" strokeWidth="4.5" />
        <ellipse cx="51" cy="36" rx="6" ry="12.5" fill="none" stroke="#f4f1ec" strokeWidth="4.5" />
      </svg>
      <span className="font-display text-[1.45rem] font-semibold uppercase leading-none tracking-[0.08em]">
        100<span className="text-accent">авто</span>
      </span>
    </span>
  )
}
