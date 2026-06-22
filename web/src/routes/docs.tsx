import { createFileRoute } from '@tanstack/react-router'

// Components
import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'
import { FooterOrganism } from '@/components/organism/footer'

// Test
import { fetchGithubData, FetchGitHubDataError } from '@/lib/github'
import { toast } from 'sonner'
(async () => {
  try {
    const data = await fetchGithubData('/docs/en/order.json')
    if (data.type === 'file') {
      const jsonData = JSON.parse(data.content)
      console.log(jsonData)
      window.alert(jsonData)
    } else {
      toast.error("データの形式が違い、エラーが発生しました。")
    }
  } catch(error) {
    if (error instanceof FetchGitHubDataError) {
      console.error(error)
      toast.error("データの読み込みに失敗しました。")
    } else {
      console.error(error)
      toast.error("不明なエラーが発生しました。")
    }
  }
})()

export const Route = createFileRoute('/docs')({
  component: App
})

function App() {
  return (
    <RootOrganism>
      <HeaderOrganism />

      <div>
        Hello World
      </div>

      <FooterOrganism />
    </RootOrganism>
  )
}
