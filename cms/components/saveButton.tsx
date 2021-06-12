import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  onClick: (event: any) => void,
}

const SaveButton = (props: Props) => (
  <button
    type="button"
    className={styles.save}
    onClick={props.onClick}
  >
    <Image src="/icon_save.svg" alt="save" width={16} height={16} />
  </button>
)

export default SaveButton
