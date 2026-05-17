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
  const isHash = href.includes('#')
  const isActive = !isHash && pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono hover:text-cyan-400 transition-colors',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-purple-400">#</span>
      {label}
    </Link>
  )
}
