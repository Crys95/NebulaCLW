import { NebulaLogo } from '@/app/components/nebula/nebula-logo'

export const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-nebula-navy border-t border-purple-500/10">
      <NebulaLogo
        src="/images/logonebula.png"
        alt="Nebula CLW"
        width={48}
        height={48}
        wrapperClassName="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        className="h-full w-full object-contain"
      />
      <span className="text-sm text-gray-500 font-mono text-center">
        © {new Date().getFullYear()}{' '}
        <strong className="text-gray-300 font-medium">Nebula CLW</strong>
        <span className="hidden sm:inline"> — Cloud Log Web</span>
      </span>
    </footer>
  )
}
