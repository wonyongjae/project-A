'use client';
import Image from 'next/image';
import styles from './page.module.css';
import * as React from 'react';
import MyButton from '../components/MyButton';




export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
       {/* <h1 className={styles.title} /> */}
        
        <MyButton />
        
    </main>
    </div>
  );
};
