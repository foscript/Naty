import { createFileRoute } from '@tanstack/react-router'

// Components
import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'
import { FooterOrganism } from '@/components/organism/footer'

export const Route = createFileRoute('/templates')({
  component: App,
})

function App() {
  return (
    <RootOrganism>
      <HeaderOrganism />
      <FooterOrganism />
    </RootOrganism>
  )
}
