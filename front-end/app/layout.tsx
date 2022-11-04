'use client';
import './globals.css'
import styles from './page.module.css'
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Image from 'next/image'
import Head from './head';
import Navigator from './navigator';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <NextUIProvider>
        <Head />
          <body>
            <header>
              <Navigator />
            </header>
            {children}
          </body>
          <Footer />
      </NextUIProvider>
    </html>
  )
}
