'use client'

import { useState, type PropsWithChildren } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache())

  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: extractStyle(cache, true),
        }}
      />
    )
  })

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}
