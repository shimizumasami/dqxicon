import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  onClick: (event: any) => void,
}

const EditButton = (props: Props) => (
  <button
    type="button"
    className={styles.edit}
    onClick={props.onClick}
  >
    <Image src="/icon_edit.svg" alt="edit" width={16} height={16} />
  </button>
)

export default EditButton
