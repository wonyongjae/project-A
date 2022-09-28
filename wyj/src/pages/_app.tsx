import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
// import './styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  )
}

export default MyApp
