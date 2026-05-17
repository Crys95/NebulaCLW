import Image from 'next/image'

type cardProps = {
  src: string
  title: string
  subTitle: string
  ability: string
}

export const ProjectCard = ({ ability, src, subTitle, title }: cardProps) => {
  return (
    <div className="max-w-[350px] rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-indigo-500 opacity-60 hover:opacity-100 transition-all">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={200}
          height={200}
          src={src}
          alt="Projeto"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          unoptimized
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-indigo-500 transition-all">
          {title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">{subTitle}</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {ability}
        </span>
      </div>
    </div>
  )
}
