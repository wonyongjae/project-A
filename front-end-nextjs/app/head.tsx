'use client';
import { usePathname } from 'next/navigation';

export default function Head() {
  const title = usePathname();
    return (
      <head>
          <title>{title === '/' ? 'Home' : title}</title>
          <meta name="description" content="width=device-width, initial-scale=1.0" />
      </head>
    );
  }
  