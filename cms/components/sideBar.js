import SideBarItem from './sideBarItem'
import styles from '../styles/SideBar.module.css'

export default function SideBar(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        <SideBarItem 
          alias="color"
          name="色"
          active={props.active == 'color' ? true : false}
        />
        <SideBarItem 
          alias="skin"
          name="はだ色"
          active={props.active == 'skin' ? true : false}
        />
        <SideBarItem 
          alias="face"
          name="りんかく"
          active={props.active == 'face' ? true : false}
        />
        <SideBarItem 
          alias="eye"
          name="め"
          active={props.active == 'eye' ? true : false}
        />
        <SideBarItem 
          alias="hair"
          name="かみがた"
          active={props.active == 'hair' ? true : false}
        />
      </ul>
      <button type="button" className={styles.reflect}>反映</button>
    </nav>
  )
}
