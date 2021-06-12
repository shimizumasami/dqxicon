import Link from 'next/link'
import styles from '../styles/SideBar.module.scss'

type Props = {
  active: boolean,
  alias: string,
  name: string,
}

const SideBarItem = (props: Props) => (
  <li className={props.active ? styles.active : styles.inactive}>
    <Link href={"/" + props.alias}><a>{props.name}</a></Link>
  </li>
)

export default SideBarItem
