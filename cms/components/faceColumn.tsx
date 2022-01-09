import ImageEditor from './imageEditor'
import ImageViewer from './imageViewer'
import ActionButtons from './actionButtons'
import { Face } from '../interfaces/face'
import { useState } from 'react'

type Props = {
    value: Face,
}

const FaceColumn = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(props.value.isCreate ?? false)
  const [inProgress, setInProgress] = useState<boolean>(false)

  /**
   * 編集開始処理.
   */
   const handleEdit = () => {
    setIsEditing(true)
  }  /**
  * 保存処理.
  */
 const handleSave = () => {
    setInProgress(true)
    setInProgress(false)
    setIsEditing(false)
  }
  /**
   * キャンセル処理.
   */
   const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <tr>
      <td>
        <ImageViewer
          src={[props.value.mask, props.value.line]}
          alt="りんかく"
        />
      </td>
      <td>
        <ImageEditor
          src={props.value.line}
          alt="りんかく 線"
        />
      </td>
      <td>
        <ImageEditor
          src={props.value.mask}
          alt="りんかく マスク"
        />
      </td>
      <td>
        <ActionButtons
          useEdit={true}
          useRemove={false}
          useChangeOrder={false}
          onEdit={() => {handleEdit()}}
          onSave={() => {handleSave()}}
          onCancel={() => {handleCancel()}}
          isEditing={isEditing}
          inProgress={inProgress}
        />
      </td>
    </tr>
  )
}

export default FaceColumn
