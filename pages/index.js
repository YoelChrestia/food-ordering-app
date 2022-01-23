import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site food ordering app with react/next js" />
        <title>Food Ordering App</title>
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  )
}
