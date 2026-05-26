import type { StarVariant } from './star-shape'

export function getStarGlowFilter(variant: StarVariant, intense = false): string {
  if (variant === 'comingSoon') {
    return intense
      ? 'drop-shadow(0 0 36px rgba(255, 120, 120, 1)) drop-shadow(0 0 60px rgba(239, 68, 68, 0.95))'
      : 'drop-shadow(0 0 28px rgba(255, 150, 150, 0.95)) drop-shadow(0 0 48px rgba(239, 68, 68, 0.8))'
  }

  return intense
    ? 'drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 32px rgba(34, 211, 238, 1)) drop-shadow(0 0 56px rgba(167, 139, 250, 0.9))'
    : 'drop-shadow(0 0 28px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 24px rgba(34, 211, 238, 0.95)) drop-shadow(0 0 44px rgba(196, 181, 253, 0.85))'
}
