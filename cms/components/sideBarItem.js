import Link from 'next/link'
import styles from '../styles/SideBar.module.scss'

export default function SideBarItem(props) {
  return (
    <li className={props.active ? styles.active : styles.inactive}>
      <Link href={"/" + props.alias}><a>{props.name}</a></Link>
    </li>
  )
}
