import Head from 'next/head'
import SideBar from './sideBar'
import styles from '../styles/App.module.scss'
import React from 'react'

type Props = {
  active?: "color" | "skin" | "face" | "eye" | "hair" | null,
}

const App: React.FC<Props> = ({ children, active }) => (
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

App.defaultProps = {
  active: null,
}

export default App
