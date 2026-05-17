'use client'

import { cn } from '@/app/lib/utils'
import Image, { ImageProps } from 'next/image'

type NebulaLogoProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: '/images/logonebula.png' | '/images/nebulasublog.png'
  alt?: string
  className?: string
  wrapperClassName?: string
  /** Brilho suave só nas áreas claras do PNG (sem caixa retangular). */
  glow?: boolean
}

const blendBySrc: Partial<Record<NebulaLogoProps['src'], string>> = {
  '/images/nebulasublog.png': 'mix-blend-screen',
}

export const NebulaLogo = ({
  src,
  alt = 'Nebula CLW',
  className,
  wrapperClassName,
  glow = false,
  ...props
}: NebulaLogoProps) => {
  const blend = blendBySrc[src]

  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-transparent',
        wrapperClassName,
      )}
    >
      {glow && (
        <Image
          src={src}
          alt=""
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 h-full w-full scale-110 object-contain opacity-50 blur-3xl',
            blend,
          )}
          {...props}
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          'relative z-10 h-auto w-full object-contain',
          blend,
          className,
        )}
        {...props}
      />
    </div>
  )
}
