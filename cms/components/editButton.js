import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

export default function EditButton(props) {
  return (
    <button
      type="image"
      className={styles.edit}
      onClick={props.onClick}
    >
      <Image src="/icon_edit.svg" alt="edit" width={16} height={16} />
    </button>
  )
}
