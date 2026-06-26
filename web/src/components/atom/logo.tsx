import { env } from '@/lib/env'

export function LogoAtom({ ...props }) {
  return <img src='/favicon.svg' alt={env.VITE_APP_NAME} {...props} />
}
