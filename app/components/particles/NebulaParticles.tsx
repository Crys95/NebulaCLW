'use client'

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { ISourceOptions } from 'tsparticles-engine'

const DESKTOP_PARTICLES = 100
const MOBILE_PARTICLES = 38
const MOBILE_BREAKPOINT = 768

function useParticleCount() {
  const [count, setCount] = useState(DESKTOP_PARTICLES)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const update = () =>
      setCount(media.matches ? MOBILE_PARTICLES : DESKTOP_PARTICLES)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return count
}

export const NebulaParticles = () => {
  const particleCount = useParticleCount()

  const particlesInit = useCallback(async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0])
  }, [])

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.65,
              color: '#22d3ee',
            },
          },
          push: { quantity: 5 },
        },
      },
      particles: {
        color: {
          value: [
            '#ffffff',
            '#e0e7ff',
            '#c4b5fd',
            '#7c3aed',
            '#22d3ee',
            '#a5f3fc',
          ],
        },
        links: {
          color: '#6366f1',
          distance: 130,
          enable: true,
          opacity: 0.12,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        number: {
          density: { enable: true, area: 1000 },
          value: particleCount,
        },
        opacity: {
          value: { min: 0.15, max: 0.9 },
          animation: {
            enable: true,
            speed: 0.35,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: ['circle', 'star'],
          options: {
            star: { sides: 5 },
          },
        },
        size: {
          value: { min: 0.6, max: 3.2 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.4,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.08,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    [particleCount],
  )

  const particleStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  }

  return (
    <div style={particleStyle}>
      <Particles
        key={particleCount}
        id="nebula-particles"
        init={particlesInit}
        options={options}
      />
    </div>
  )
}
