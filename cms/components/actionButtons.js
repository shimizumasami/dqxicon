import EditButton from '../components/editButton'
import SaveButton from '../components/saveButton'
import CancelButton from '../components/cancelButton'
import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

function ActionButtons(props) {
  let editButton = null;
  if (props.useEdit) {
    if (props.isEdit) {
      editButton = (
        <span>
          <SaveButton onClick={() => props.onEditSave()} />
          <CancelButton onClick={() => props.onEditCancel()} />
        </span>
      )
    } else {
      editButton = (<EditButton onClick={() => props.onEdit()} />)
    }
  }

  return (
    <div className={styles.action_buttons}>
      {editButton}
      <button type="image" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>
      <button type="image" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>
      <button type="image" className={styles.trash}><Image src="/icon_trash.svg" alt="move to trash" width={14} height={14}/></button>
    </div>
  )
}

ActionButtons.defaultProps = {
  useEdit: true,
}

export default ActionButtons
