'use client';
// import './globals.css'
// import styles from './page.module.css'
import * as React from 'react';
import Head from './head';
import Navigator from './navigator';
import Footer from './footer';
import { Suspense } from 'react';
import Loading from './loading';

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <NextUIProvider>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
          }}
        >
          <Head />
          <Suspense fallback={<Loading />}>
            <body>
              <header>
                  <Navigator />
              </header>
              {children}
            </body>
          </Suspense>
          <Footer />
        </NextThemesProvider>
      </NextUIProvider>
    </html>
  )
}
