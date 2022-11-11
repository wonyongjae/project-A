// 'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { Button, Link, Text } from "@nextui-org/react";

export default function Footer(){ //weight="bold" size={20}
    const router = useRouter();
    return (
        <footer className={styles.footer}>
            <Button onClick={() => router.back()} bordered shadow color="gradient" auto flat >
              <Text b className="text-lg font-black">Footer</Text>
            </Button>
        </footer>
    );
};
