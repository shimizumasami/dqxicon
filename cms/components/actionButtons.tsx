import EditButton from './editButton'
import SaveButton from './saveButton'
import CancelButton from './cancelButton'
import RemoveButton from './RemoveButton'
import ProgressButton from './progressButton'
import Image from 'next/image'
import styles from '../styles/ActionButtons.module.scss'

type Props = {
  useEdit: boolean,
  useRemove: boolean,
  useChangeOrder: boolean,
  onEdit: () => void,
  onSave: () => void,
  onCancel: () => void,
  onRemove: () => void,
  isEditing: boolean,
  inProgress: boolean,
}

const ActionButtons = (props: Props) => {
  {/* プログレス中はプログレスボタンのみ表示 */}
  if (props.inProgress) {
    return (<ProgressButton />)
  }

  let editButton = null
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

  let removeButton = null
  if (props.useRemove) {
    removeButton = (<RemoveButton onRemove={() => props.onRemove()} />)
  }

  let upButton = null
  let downButton = null
  if (props.useChangeOrder) {
    upButton = (<button type="button" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>)
    downButton = (<button type="button" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>)
  }

  return (
    <div className={styles.action_buttons}>
      {editButton}
      {upButton}
      {downButton}
      {removeButton}
    </div>
  )
}

ActionButtons.defaultProps = {
  useEdit: true,
  useRemove: true,
  useChangeOrder: true,
  onEdit: null,
  onSave: null,
  onCancel: null,
  onRemove: null,
  inProgress: false,
}

export default ActionButtons
