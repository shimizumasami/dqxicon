import EditButton from './editButton'
import SaveButton from './saveButton'
import CancelButton from './cancelButton'
import RemoveButton from './RemoveButton'
import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  useEdit: boolean,
  isEditing: boolean,
  onEdit: () => void,
  onSave: () => void,
  onCancel: () => void,
  onRemove: () => void,
}

const ActionButtons = (props: Props) => {
  let editButton = null;
  if (props.useEdit) {
    if (props.isEditing) {
      editButton = (
        <span>
          <SaveButton onClick={() => props.onSave()} />
          <CancelButton onClick={() => props.onCancel()} />
        </span>
      )
    } else {
      editButton = (<EditButton onClick={() => props.onEdit()} />)
    }
  }

  return (
    <div className={styles.action_buttons}>
      {editButton}
      <button type="button" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>
      <button type="button" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>
      <RemoveButton onRemove={() => props.onRemove()} />
    </div>
  )
}

ActionButtons.defaultProps = {
  useEdit: true,
}

export default ActionButtons
