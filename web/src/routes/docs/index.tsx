import { createFileRoute } from '@tanstack/react-router'
import Docs from '@/docs/en/index.mdx'

export const Route = createFileRoute('/docs/')({
  component: App
})

function App() {
  return <Docs />
}
