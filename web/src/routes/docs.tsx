import { createFileRoute, Link, Outlet, type LinkProps } from '@tanstack/react-router'
import { MDXProvider } from '@mdx-js/react'
import { useState } from 'react'
import type React from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

// Components
import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'
import { FooterOrganism } from '@/components/organism/footer'

function SideLink({ to, children }: { to: LinkProps['to'], children: React.ReactNode }) {
  return (
    <Link to={to} className='text-muted-foreground hover:text-foreground text-sm truncate w-fit'>
      {children}
    </Link>
  )
}

function SideAccordionLink({ children, title, open = false }: { children: React.ReactNode, title: string, open?: boolean }) {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  return (
    <div className='gap-4 flex flex-col'>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex gap-2 items-center'>
        <p className='text-muted-foreground5 text-md truncate w-fit'>{title}</p>
        
        {isOpen ? (
          <FaChevronDown className='size-3' />
        ): (
          <FaChevronRight className='size-3' />
        )}
      </div>

      {isOpen && (
        <div className='pl-2 flex flex-col gap-4'>
          {children}
        </div>
      )}
    </div>
  )
}

export const Route = createFileRoute('/docs')({
  component: App,
})

function App() {
  return (
    <RootOrganism>
      <HeaderOrganism />
      
      <div className='w-full flex'>
        <div className='w-75 p-5 flex flex-col gap-4 border-r'>
          <SideAccordionLink title='Quick Start' open>
            <SideLink to='/docs'>How to create project?</SideLink>
            <SideLink to='/docs'>Third-Party Templates</SideLink>
            <SideLink to='/docs'>Other Options</SideLink>
          </SideAccordionLink>

          <SideAccordionLink title='Create Template'>
            <SideLink to='/docs'>How to create project?</SideLink>
          </SideAccordionLink>
        </div>

        <MDXProvider components={{
          h1: ({ children }) => {
            return (
              <h1 className='text-4xl pb-1 pl-0.5 font-semibold'>{children}</h1>
            )
          },

          h2: ({ children }) => {
            return (
              <h2 className='text-3xl pb-1 pl-0.5 font-semibold'>{children}</h2>
            )
          },

          a: ({ children, href }) => {
            return (
              <Link to={href} className='w-fit flex text-sidebar-primary items-center gap-0.5'>
                {children}
              </Link>
            )
          },

          li: ({ children }) => {
            return (
              <li className='flex items-center gap-2'>{children}</li>
            )
          },

          ul: ({ children }) => {
            return (
              <ul className='flex flex-col gap-2'>{children}</ul>
            )
          },

          ol: ({ children }) => {
            return (
              <ol className='flex flex-col gap-2'>{children}</ol>
            )
          },

          code: ({ children }) => {
            return (
              <code className='bg-chart-4 p-1 rounded-md w-fit'>{children}</code>
            )
          }
        }}>
          <div className='w-[calc(100%-300px)] p-8 flex flex-col gap-2'>
            <Outlet />
          </div>
        </MDXProvider>
      </div>

      <FooterOrganism />
    </RootOrganism>
  )
}
