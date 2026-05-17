'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from '../button'
import { TbArrowNarrowUp } from 'react-icons/tb'

export const BackTopTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (window.scrollY > 500) setShow(true)
    else setShow(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return show ? (
    <div>
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 shadow-nebula-glow"
      >
        <TbArrowNarrowUp size={20} />
      </Button>
    </div>
  ) : null
}
