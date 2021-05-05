import styles from '../styles/SideBar.module.css'

export default function SideBar({}) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/">色</a></li>
        <li><a href="/">はだ色</a></li>
        <li><a href="/">りんかく</a></li>
        <li><a href="/">め</a></li>
        <li><a href="/">かみがた</a></li>
      </ul>
      <button type="button" className={styles.reflect}>反映</button>
    </nav>
  )
}
