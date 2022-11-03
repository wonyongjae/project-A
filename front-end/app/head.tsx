// 'use client'
import { usePathname } from 'next/navigation'

function Head() {
  const title = usePathname();
    return (
      <>
          <title>{title === '/' ? 'Home' : title}</title>
          <meta name="description" content="width=device-width, initial-scale=1.0" />
      </>
    );
  }
  
  export default Head;