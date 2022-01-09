import ColorEditor from './colorEditor'
import ActionButtons from './actionButtons'
import { Skin } from '../interfaces/skin'
import { useState } from 'react'
import axios from 'axios'

type Props = {
  value: Skin,
  onRemove: (event: any) => void,
}

const SkinColumn = (props: Props) => {
  const [isCreate, setIsCreate] = useState<boolean>(props.value.isCreate ?? false)
  const [isEditing, setIsEditing] = useState<boolean>(props.value.isCreate ?? false)
  const [inProgress, setInProgress] = useState<boolean>(false)
  const [id, setId] = useState<string>(props.value.id)
  const [order, setOrder] = useState<number>(props.value.order)
  const [codes, setCodes] = useState<string[]>(Array(2).fill(props.value.code))

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
    console.log('[START] save skin')
    setInProgress(true)

    axios({
      method: isCreate ? 'POST' : 'PUT',
      url: process.env.apiEndpointOuter + (isCreate ? '/skin' : '/skin/' + id),
      data: {
        order: order,
        code: codes[1],
      }
    })
      .then(res => {
        console.log(res.data)
        setIsCreate(false)
        setIsEditing(false)
        setId(res.data.data.id)
        setOrder(res.data.data.order)
        setCodes(Array(2).fill(res.data.data.code))
      })
      .catch(res => {
        console.log(res.data)
      })
      .finally(() => {
        setInProgress(false)
        console.log('[END] save skin')
      })
  }
  /**
   * キャンセル処理.
   */
  const handleCancel = () => {
    isCreate ? cancelCreate() : cancelEdit()
  }
  /**
   * 削除処理.
   */
   const handleRemove = () => {
    console.log('[START] remove skin')
    setInProgress(true)
    axios({
      method: 'DELETE',
      url: process.env.apiEndpointOuter + '/skin/' + id,
    })
      .then(res => {
        console.log(res.data)
        props.onRemove(id)
      })
      .catch(res => {
        console.log(res.data)
      })
      .finally(() => {
        setInProgress(false)
        console.log('[END] remove skin')
      })
  }

  /**
   * コード入力欄変更時の表示同期.
   */
  const handleChangeCode = (event) => {
    const codes_update = codes.slice()
    codes_update[1] = event.target.value
    setCodes(codes_update)
  }

  /**
   * 追加をキャンセル.
   */
  const cancelCreate = () => {
    props.onRemove(id)
  }
  /**
   * 編集をキャンセル.
   */
  const cancelEdit = () => {
    const codes_update = codes.slice()
    codes_update[1] = codes_update[0]
    setIsEditing(false)
    setCodes(codes_update)
  }

  return (
    <tr>
      <td>{order}</td>
      <td><ColorEditor color={codes[1]}/></td>
      <td>
        {
          isEditing
          ? <input type="text" value={codes[1]} onChange={handleChangeCode} />
          : codes[0]
        }
      </td>
      <td>
        {
          <ActionButtons
            onEdit={() => {handleEdit()}}
            onSave={() => {handleSave()}}
            onCancel={() => {handleCancel()}}
            onRemove={() => {handleRemove()}}
            isEditing={isEditing}
            inProgress={inProgress}
          />
        }
      </td>
    </tr>
  )
}

export default SkinColumn
