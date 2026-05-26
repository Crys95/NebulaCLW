import type { ProjectId } from './projects'

function hashId(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) {
    h = (h << 5) - h + id.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

export type StarDriftLayout = {
  id: ProjectId
  startX: number
  startY: number
  size: number
  duration: number
  delay: number
  path: { x: number[]; y: number[] }
}

/** Posição e trajetória estáveis por projeto — novo id em PROJECTS = nova estrela. */
export function getStarLayout(id: ProjectId, index: number, total: number): StarDriftLayout {
  const h = hashId(id)
  const spread = total > 1 ? index / (total - 1) : 0.5

  const startX = 8 + (h % 72) + spread * 6
  const startY = 22 + ((h >> 4) % 52) + (index % 3) * 8

  const ampX = 12 + (h % 18)
  const ampY = 10 + ((h >> 6) % 16)

  return {
    id,
    startX,
    startY,
    size: 44 + (h % 36),
    duration: 28 + (h % 22),
    delay: (h % 10) * 0.4,
    path: {
      x: [0, ampX, -ampX * 0.7, ampX * 0.5, 0],
      y: [0, -ampY, ampY * 0.8, -ampY * 0.4, 0],
    },
  }
}
