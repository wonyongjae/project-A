'use client';
import styles from '../../page.module.css';

export default function Analytics() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <div>
                <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>first graph &rarr;</h2>
                    <p>bubble</p>
                </a>
                </div>

                <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>second graph &rarr;</h2>
                    <p>pie</p>
                </a>
                </div>

                <div className={styles.grid}>
                <a href="#" className={styles.card}>
                    <h2>third graph &rarr;</h2>
                    <p>bar</p>
                </a>
                </div>
            </div>
        </main>
    </div>
  );
};
