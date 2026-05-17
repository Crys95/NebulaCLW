import { NebulaHero } from './components/pages/nebula/hero'
import { NebulaAbout } from './components/pages/nebula/about'
import { NebulaValues } from './components/pages/nebula/values'
import { NebulaServices } from './components/pages/nebula/services'
import { NebulaProcess } from './components/pages/nebula/process'
import { NebulaBenefits } from './components/pages/nebula/benefits'

export default function Home() {
  return (
    <>
      <NebulaHero />
      <NebulaAbout />
      <NebulaValues />
      <NebulaServices />
      <NebulaProcess />
      <NebulaBenefits />
    </>
  )
}
