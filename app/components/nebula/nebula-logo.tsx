'use client'

import { cn } from '@/app/lib/utils'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

type NebulaLogoProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: '/images/logonebula.png' | '/images/nebulasublog.png' | '/images/nebulatexto.jpeg'
  alt?: string
  className?: string
  wrapperClassName?: string
  /** Brilho suave só nas áreas claras do PNG (sem caixa retangular). */
  glow?: boolean
  /** Sem mix-blend — evita risgo/flash em JPEG com fundo preto. */
  unblend?: boolean
  /** Recorta borda esquerda do arquivo (artefato em alguns JPEGs). */
  cropEdge?: boolean
}

const blendBySrc: Partial<Record<NebulaLogoProps['src'], string>> = {
  '/images/nebulasublog.png': 'mix-blend-screen',
  '/images/nebulatexto.jpeg': 'mix-blend-screen',
}

export const NebulaLogo = ({
  src,
  alt = 'Nebula CLW',
  className,
  wrapperClassName,
  glow = false,
  unblend = false,
  cropEdge = false,
  ...props
}: NebulaLogoProps) => {
  const [loaded, setLoaded] = useState(false)
  const blend = unblend ? undefined : blendBySrc[src]

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-transparent',
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
        onLoadingComplete={() => setLoaded(true)}
        className={cn(
          'relative z-10 h-auto w-full object-contain transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          cropEdge && '[clip-path:inset(0_0_0_4px)]',
          blend,
          className,
        )}
        {...props}
      />
    </div>
  )
}
