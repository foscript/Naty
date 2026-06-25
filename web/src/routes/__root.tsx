import { Outlet, createRootRoute } from '@tanstack/react-router'
import { RootOrganism } from '@/components/organism/root'
import { Toaster } from '@/components/shadcn/ui/sonner'

import { cn } from '@/lib/shadcn/utils'
import { useDarkMode } from 'usehooks-ts'

export const Route = createRootRoute({
  component: App
})

function App() {
  const { isDarkMode } = useDarkMode()

  return (
      <RootOrganism className={cn(isDarkMode && 'dark')}>
        <Outlet />
        <Toaster />
      </RootOrganism>
  )
}
