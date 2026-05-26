'use client'

import { useEffect, useState } from 'react'
import { SECTION_IDS, type SectionId } from '@/app/lib/sections'

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('inicio')

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.15, 0.35, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}
