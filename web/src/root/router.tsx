import { RouterProvider, createRouter } from '@tanstack/react-router'
import { NotfoundTemplate } from '@/components/only/notfound'
import { routeTree } from '@/routeTree.gen'
import type { FC } from 'react'

// Initialize the router
const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundTemplate
})

// Define the router types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routes
  }
}

export const Router: FC = () => <RouterProvider router={routes} />
