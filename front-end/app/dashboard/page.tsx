'use client';
import Image from 'next/image'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
            <div className={styles.grid}>
                <button type='button' onClick={() =>router.push('/')}>
                    Home
                </button>
                {/* <Link href='/analytics'>Analytics</Link> */}
            </div>
            <div className={styles.grid}>
                <button type='button' onClick={() =>router.push('./analytics')}>
                  Analytics
                </button>
            </div>
            <div className={styles.grid}>
                {/* <button type='button' onClick={() => router.push('/settings')}>
                    Settings
                </button> */}
                <Link href='http://localhost:3000/settings'>Settings</Link>
            </div>
        </div>
      </main>
    </div>
  )
}
