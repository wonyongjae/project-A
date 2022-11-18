// 'use client';
import styles from './page.module.css';
import * as React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="#"> Hello My Name is Yongjae</a>
      </h1>

      <p className={styles.description}>
        {/* Get started by editing{' '}
        <code className={styles.code}>app/page.tsx</code> */}
      </p>


      <div className={styles.grid}>
        <a
          href="https://wonyongjae.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>My GitHub &rarr;</h2>
          <p>My Repository</p>
        </a>

        <a
          href="https://www.notion.so/wonyongjae/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>My Notion &rarr;</h2>
          <p>Just Like Cook Book</p>
        </a>

        <a href="#" className={styles.card}>
          <h2>Empty &rarr;</h2>
          <p>It&apos;s not ready yet.</p>
        </a>

        <a href="#" className={styles.card}>
          <h2>Empty &rarr;</h2>
          <p>It&apos;s not ready yet.</p>
        </a>

      </div>
    </main>
  </div>
  );
};
