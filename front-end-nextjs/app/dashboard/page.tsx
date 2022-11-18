'use client';
import styles from '../page.module.css';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <div>
              <div className={styles.grid}>
                  <button type='button' onClick={(e) =>router.push('/')}>
                      Home
                  </button>
              </div>
              <div className={styles.grid}>
                  <button type='button' onClick={(e) =>router.push('/dashboard/analytics')}>
                    Analytics
                  </button>
              </div>
              <div className={styles.grid}>
                  <button type='button' onClick={() => router.push('/dashboard/settings')}>
                      Settings
                  </button>
              </div>
          </div>
        </Suspense>
      </main>
    </div>
  )
}
