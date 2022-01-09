import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site food ordering app with react/next js" />
        <title>Food Ordering App</title>
      </Head>
      HomePage
    </div>
  )
}
