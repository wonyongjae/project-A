'use client';
import styles from './page.module.css';
import { Button, Link, Text } from "@nextui-org/react";

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <Button color="gradient" auto flat as={Link} href={`http://localhost:3000/`}>
              <Text b size={20} weight="bold" className="text-lg font-black">Footer</Text>
            </Button>
        </footer>
    );
};
