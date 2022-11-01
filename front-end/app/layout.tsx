import './globals.css'
import styles from './page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ko">
        <head>
          <title>first my nextjs 13</title>
          <meta name="description" content="width=device-width, initial-scale=1.0" />
        </head>
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
      </html>
  )
}
