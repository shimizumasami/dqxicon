import Link from 'next/link'
import styles from '../styles/SideBar.module.css'

export default function SideBarItem(props) {
  return (
    <li className={props.active && styles.active}>
      <Link href={"/" + props.alias}><a>{props.name}</a></Link>
    </li>
  )
}
