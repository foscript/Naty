// Components
import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'

import { cn } from '@/lib/shadcn/utils'
import { useTranslation } from 'react-i18next'
import { useDarkMode } from 'usehooks-ts'

export function NotfoundTemplate() {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()

  return (
    <RootOrganism className={cn(
      'flex flex-col justify-center items-center px-6',
      isDarkMode && 'dark'
    )}>
      <HeaderOrganism fixed />
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl font-bold'>404</h2>
        <h1 className='text-md'>{t('components.template.notfound.title')}</h1>
      </div>
    </RootOrganism>
  )
}
