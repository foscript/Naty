import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/how-to-create-your-template/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/how-to-create-your-template/"!</div>
}
