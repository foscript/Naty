import { useState } from 'react'
import { Copy, CopyCheck, CopyX } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button, type ButtonType } from '@/components/shadcn/ui/button'

type CopyButtonState = 'complete' | 'error' | 'default'
const copyButtonStateMap = {
  default: { labelKey: 'components.atom.copyButton.0', Icon: Copy },
  complete: { labelKey: 'components.atom.copyButton.1', Icon: CopyCheck },
  error: { labelKey: 'components.atom.copyButton.2', Icon: CopyX }
} as const

export function CopyButtonAtom({ text, show, ...props }: ButtonType & { text: string, show?: boolean }) {
  const [state, setState] = useState<CopyButtonState>('default')
  const { t } = useTranslation()

  async function handleCopy() {
    if (state != 'default') return

    try {
      await navigator.clipboard.writeText(text)
      setState('complete')
    } catch {
      setState('error')
    } finally {
      // Reset state after 3 seccounds
      setTimeout(() => {
        setState('default')
      }, 3000)
    }
  }

  const currentState = copyButtonStateMap[state]
  const CurrentIcon = currentState.Icon
  const currentText = show ? text : t(currentState.labelKey)

  return (
    <Button onClick={handleCopy} variant='outline' {...props}>
      {currentText}
      <CurrentIcon />
    </Button>
  )
}
