import type React from 'react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/shadcn/ui/item'

export function AnnounceDocsOnly({ children, description, title }: { children: React.ReactNode, description: string, title: string }) {
  return (
    <Item variant='muted'>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>
          {description}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        {children}
      </ItemActions>
    </Item>
  )
}
