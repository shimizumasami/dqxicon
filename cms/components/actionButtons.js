import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

export default function ActionButtons() {
  return (
    <div>
      <button type="image" className={styles.edit}><Image src="/icon_edit.svg" alt="edit" width={16} height={16} /></button>
      <button type="image" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>
      <button type="image" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>
      <button type="image" className={styles.trash}><Image src="/icon_trash.svg" alt="move to trash" width={14} height={14}/></button>
    </div>
  )
}
