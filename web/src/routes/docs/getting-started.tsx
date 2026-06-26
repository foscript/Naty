import { createFileRoute } from '@tanstack/react-router'
import { RootDocsOnly } from '@/components/only/docs/root'

import Docs from '@/docs/getting-started.mdx'
import raw from '@/docs/getting-started.mdx?raw'

export const Route = createFileRoute('/docs/getting-started')({
  component: App
})

function App() {
  return (
    <RootDocsOnly raw={raw}>
      <Docs />
    </RootDocsOnly>
  )
}
