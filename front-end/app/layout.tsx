'use client';
import './globals.css'
import styles from './page.module.css'
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Image from 'next/image'
import Head from './head';
import Navigator from './navigator';

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
