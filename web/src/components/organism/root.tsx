import { cn } from '@/lib/shadcn/utils'

export function RootOrganism({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      'min-h-svh w-full bg-background text-foreground',
      className
    )} {...props}>
      {children}
    </div>
  )
}
