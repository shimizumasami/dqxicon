import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  onRemove: (event: any) => void,
}

const RemoveButton = (props: Props) => (
  <button
    type="button"
    className={styles.trash}
    onClick={props.onRemove}
  >
    <Image src="/icon_trash.svg" alt="move to trash" width={14} height={14} />
  </button>
)

export default RemoveButton
