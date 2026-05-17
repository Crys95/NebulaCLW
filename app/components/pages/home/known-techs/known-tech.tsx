import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { ReactNode } from 'react'

type KnownTechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativoTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  )?.replace('há', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20  justify-between text-gray-500 flex hover:text-indigo-500 hover:bg-gray-600/30 transition-all">
      <div className="block items-center">
        <p className="font-medium">{tech.name}</p>
        <span>{relativoTime} de experiência</span>
      </div>
      {tech.icon}
    </div>
  )
}
