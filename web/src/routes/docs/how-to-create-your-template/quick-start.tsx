import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/docs/how-to-create-your-template/quick-start',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/how-to-create-your-template/quick-start"!</div>
}
