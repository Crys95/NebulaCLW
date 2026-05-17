'use client'

import { useCallback, CSSProperties } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'

export const NebulaParticles = () => {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0])
  }, [])

  const particleStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  }

  return (
    <div style={particleStyle} aria-hidden>
      <Particles
        id="nebula-particles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: ['#7c3aed', '#c026d3', '#22d3ee', '#a78bfa'] },
            links: {
              color: '#7c3aed',
              distance: 120,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              outModes: { default: 'out' },
            },
            number: {
              density: { enable: true, area: 900 },
              value: 70,
            },
            opacity: {
              value: { min: 0.2, max: 0.7 },
              animation: { enable: true, speed: 0.5 },
            },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
