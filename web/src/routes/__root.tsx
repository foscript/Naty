import { Outlet, createRootRoute } from '@tanstack/react-router'
import { RootOrganism } from '@/components/organism/root'
import { Toaster } from '@/components/shadcn/ui/sonner'

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
      <RootOrganism>
        <Outlet />
        <Toaster />
      </RootOrganism>
  )
}
