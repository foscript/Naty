import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/')({
  component: App
})

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate({ to: '/docs/getting-started' })
  }, [navigate])
}
