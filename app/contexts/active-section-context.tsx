'use client'

import { createContext, useContext } from 'react'
import { useActiveSection } from '@/app/hooks/use-active-section'
import type { SectionId } from '@/app/lib/sections'

const ActiveSectionContext = createContext<SectionId | null>(null)

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const active = useActiveSection()

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionId() {
  const ctx = useContext(ActiveSectionContext)
  if (!ctx) {
    throw new Error('useActiveSectionId must be used within ActiveSectionProvider')
  }
  return ctx
}
