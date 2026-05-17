import { NebulaLogo } from '@/app/components/nebula/nebula-logo'

export const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-nebula-navy border-t border-purple-500/10">
      <NebulaLogo
        src="/images/logonebula.png"
        alt="Nebula CLW"
        width={32}
        height={32}
        wrapperClassName="w-8 h-8"
        className="max-h-full"
      />
      <span className="text-sm text-gray-500 font-mono text-center">
        © {new Date().getFullYear()}{' '}
        <strong className="text-gray-300 font-medium">Nebula CLW</strong>
        <span className="hidden sm:inline"> — Cloud Log Web</span>
      </span>
    </footer>
  )
}
