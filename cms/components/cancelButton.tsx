import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  onClick: (event: any) => void,
}

const CancelButton = (props: Props) => (
  <button
    type="button"
    className={styles.cancel}
    onClick={props.onClick}
  >
    <Image src="/icon_cancel.svg" alt="save" width={14} height={14} />
  </button>
)

export default CancelButton
