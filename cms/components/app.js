import Head from 'next/head'
import SideBar from '../components/sideBar'
import styles from '../styles/App.module.scss'

export default function App({ children, active }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>[CMS] えるこアイコンジェネレーター</title>
      </Head>

      <SideBar active={active}/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
