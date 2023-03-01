import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { Navbar } from '@components'
import { ProjectOverview } from '@components'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => { globalStyles() }, [])

  return(
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ false }
      defaultTheme="dark"
      
    >
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
