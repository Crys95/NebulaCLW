'use client'

import { cn } from '@/app/lib/utils'
import Image, { ImageProps } from 'next/image'

type NebulaLogoProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: '/images/nebulalogo.jpeg' | '/images/nebulatexto.jpeg'
  alt?: string
  className?: string
  wrapperClassName?: string
}

const blendBySrc: Record<NebulaLogoProps['src'], string> = {
  '/images/nebulatexto.jpeg': 'mix-blend-screen',
  '/images/nebulalogo.jpeg': 'mix-blend-multiply',
}

/**
 * Logos em JPEG: o blend integra o fundo ao tema escuro do site
 * (preto some com screen; branco/xadrez some com multiply).
 */
export const NebulaLogo = ({
  src,
  alt = 'Nebula CLW',
  className,
  wrapperClassName,
  ...props
}: NebulaLogoProps) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-transparent',
        wrapperClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'h-auto w-full object-contain',
          blendBySrc[src],
          className,
        )}
        {...props}
      />
    </div>
  )
}
