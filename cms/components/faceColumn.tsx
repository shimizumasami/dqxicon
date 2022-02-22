import ImageEditor from './imageEditor'
import ImageViewer from './imageViewer'
import ActionButtons from './actionButtons'
import { Face } from '../interfaces/face'
import { useState } from 'react'
import axios from 'axios'

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
  }
  /**
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

  /**
   * 線画像が選択された
   */
  const handleSelectedLine = (input) => {
    console.log('[START] handleSelectedLine')
    // 編集中にする
    setIsEditing(true)
    // プログレス表示
    // ファイルアップロードする
    console.log(process.env.apiEndpointOuter + '/image')
    const params = new FormData()
    params.append('file', input.target.files[0])
    axios({
      method: 'POST',
      url: process.env.apiEndpointOuter + '/image',
      headers: {
        'content-type': 'multipart/form-data',
      },
      params
    })
      .then(res => {
        // 成功ならimage src差し替え
        console.log('success')
      })
      .catch(res => {
        console.log('error')
      })
      .finally(() => {
        console.log('finally')
        // プログレス終了
        // 編集中終了
        setIsEditing(false)
      })
  }

  /**
   * マスク画像が選択された
   */
   const handleSelectedMask = (file) => {
    console.log('[START] handleSelectedMask')
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
          onSelected={(file) => {handleSelectedLine(file)}}
        />
      </td>
      <td>
        <ImageEditor
          src={props.value.mask}
          alt="りんかく マスク"
          onSelected={(file) => {handleSelectedMask(file)}}
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
