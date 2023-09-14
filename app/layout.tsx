import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'test',
  description: 'test'
}
