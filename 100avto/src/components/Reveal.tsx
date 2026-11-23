import type { ElementType, ReactNode } from 'react'

interface Props {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: Props) {
  return (
    <Tag className={`reveal ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
