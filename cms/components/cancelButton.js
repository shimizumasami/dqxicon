import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

export default function CancelButton(props) {
  return (
    <button
      type="image"
      className={styles.cancel}
      onClick={props.onClick}
    >
      <Image src="/icon_cancel.svg" alt="save" width={14} height={14} />
    </button>
  )
}

