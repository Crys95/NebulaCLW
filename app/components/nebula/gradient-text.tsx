import { cn } from '@/app/lib/utils'
import { ReactNode } from 'react'

type GradientTextProps = {
  children: ReactNode
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
  className?: string
}

export const GradientText = ({
  children,
  as: Tag = 'span',
  className,
}: GradientTextProps) => {
  return <Tag className={cn('gradient-text', className)}>{children}</Tag>
}
