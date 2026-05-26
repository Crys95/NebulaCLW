'use client'

import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils'

const SHOOTING_STARS = [
  { top: '12%', left: '8%', delay: 0, duration: 2.8 },
  { top: '28%', left: '72%', delay: 4.2, duration: 2.2 },
  { top: '55%', left: '45%', delay: 8.5, duration: 3.1 },
  { top: '78%', left: '18%', delay: 12, duration: 2.5 },
  { top: '35%', left: '88%', delay: 16.5, duration: 2.9 },
]

export const CosmicBackdrop = ({ className }: { className?: string }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden>
      {/* Fundo profundo do espaço */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,#0f0a2e_0%,#050510_45%,#020208_100%)]" />

      {/* Nebulosas lentas */}
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[55vh] w-[55vh] rounded-full bg-purple-600/20 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[15%] top-[35%] h-[45vh] w-[45vh] rounded-full bg-cyan-500/15 blur-[90px]"
        animate={{ x: [0, -35, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[40vh] w-[50vh] rounded-full bg-fuchsia-600/12 blur-[110px]"
        animate={{ x: [0, 30, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Campo de estrelas distantes (CSS) */}
      <div className="absolute inset-0 space-starfield opacity-70" />
      <div className="absolute inset-0 space-starfield-dense opacity-40" />

      {/* Estrelas cadentes */}
      {SHOOTING_STARS.map((star, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Vinheta nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,16,0.55)_100%)]" />
    </div>
  )
}
