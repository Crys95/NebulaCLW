'use client'

import { CosmicBackdrop } from './cosmic-backdrop'
import { FloatingAsteroids } from './floating-asteroids'
import { NebulaParticles } from '@/app/components/particles/NebulaParticles'

/** Fundo fixo: nebulosas + estrelas + asteroides + partículas interativas. */
export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      <CosmicBackdrop className="pointer-events-none" />
      <FloatingAsteroids />
      <div className="absolute inset-0">
        <NebulaParticles />
      </div>
    </div>
  )
}
