'use client';
import './globals.css'
import styles from './page.module.css'
import NaviBar from './navibar';
import Image from 'next/image'
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <NextUIProvider>
        <head>
          <title>first my nextjs 13</title>
          {/* <meta name="description" content="width=device-width, initial-scale=1.0" /> */}
        </head>
        <header>
          <NaviBar />
        </header>
            <body>{children}</body>
        <footer className={styles.footer}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            Hello World{' '}
          </a>
        </footer>
      </NextUIProvider>
    </html>
  )
}
