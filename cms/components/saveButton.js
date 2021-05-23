import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

export default function SaveButton(props) {
  return (
    <button
      type="image"
      className={styles.save}
      onClick={props.onClick}
    >
      <Image src="/icon_save.svg" alt="save" width={16} height={16} />
    </button>
  )
}

