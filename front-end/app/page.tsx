import Image from 'next/image'
import styles from './page.module.css'
import NaviBar from './navibar';
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title} /> */}
        
        <div className={styles.grid}>
          <a href="hhttps://wonyongjae.github.io/" className={styles.card}>
            <h2>Welcome to &rarr;</h2>
            <p>My GitHub!</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://www.notion.so/wonyongjae/" className={styles.card}>
            <h2>And then &rarr;</h2>
            <p>My Notion!</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="http://localhost:3000/dashboard" className={styles.card}>
            <h2>Go to &rarr;</h2>
            <p>DashBoard!</p>
          </a>
        </div>
      </main>
    </div>
  )
}
