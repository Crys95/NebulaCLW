'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'

type NavItensProps = {
  label: string
  href: string
  onClick?: () => void
}

export const NavItem = ({ label, href, onClick }: NavItensProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative whitespace-nowrap px-1 py-2 text-xs font-medium font-mono transition-colors lg:text-sm',
        isActive ? 'text-cyan-300' : 'text-gray-400 hover:text-cyan-400',
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-nebula-gradient" />
      )}
    </Link>
  )
}
