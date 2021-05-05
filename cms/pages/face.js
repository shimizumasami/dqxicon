import Head from '../components/head'
import SideBar from '../components/sideBar'
import styles from '../styles/Home.module.css'

export default function Face() {
  return (
    <div className={styles.container}>
      <Head />
      <SideBar face="true"/>

      <main className={styles.main}>
      </main>

    </div>
  )
}
