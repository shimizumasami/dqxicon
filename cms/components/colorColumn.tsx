import ColorEditor from './colorEditor'
import ActionButtons from './actionButtons'
import { Color } from '../interfaces/color'
import { useState } from 'react'
import axios from 'axios'

type Props = {
  value: Color,
  onRemove: (event: any) => void,
}

const ColorColumn = (props: Props) => {
  const [isCreate, setIsCreate] = useState<boolean>(props.value.isCreate ?? false)
  const [isEditing, setIsEditing] = useState<boolean>(props.value.isCreate ?? false)
  const [id, setId] = useState<string>(props.value.id)
  const [order, setOrder] = useState<number>(props.value.order)
  const [codes, setCodes] = useState<string[]>(Array(2).fill(props.value.code))
  const [names, setNames] = useState<string[]>(Array(2).fill(props.value.name))

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
    console.log('[START] save progress')
    const codes_update = codes.slice()
    const names_update = names.slice()
    codes_update[0] = codes_update[1]
    names_update[0] = names_update[1]
    setIsCreate(false)
    setIsEditing(false)
    setCodes(codes_update)
    setNames(names_update)

    axios({
      method: isCreate ? 'POST' : 'PUT',
      url: process.env.apiEndpointOuter + (isCreate ? '/color' : '/color/' + id),
      data: {
        order: order,
        code: codes[1],
        name: names[1],
      }
    })
      .then(res => {
        console.log(res.data)
        setId(res.data.data.id)
        setOrder(res.data.data.order)
        setCodes(Array(2).fill(res.data.data.code))
        setNames(Array(2).fill(res.data.data.name))
        console.log('[END] save progress')
      })
      .catch(res => {
        console.log(res.data)
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
    axios({
      method: 'DELETE',
      url: process.env.apiEndpointOuter + '/color/' + id,
    })
      .then(res => {
        console.log(res.data)
        props.onRemove(id)
      })
      .catch(res => {
        console.log(res.data)
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
   * 名前入力欄変更時の表示同期.
   */
  const handleChangeName = (event) => {
    const names_update = names.slice()
    names_update[1] = event.target.value
    setNames(names_update)
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
    const names_update = names.slice()
    codes_update[1] = codes_update[0]
    names_update[1] = names_update[0]
    setIsEditing(false)
    setCodes(codes_update)
    setNames(names_update)
  }

  return (
    <tr>
      <td>{order}</td>
      <td><ColorEditor color={codes[1]}/></td>
      <td>
        {
          isEditing ? 
          <input type="text" value={codes[1]} onChange={handleChangeCode} /> :
          codes[0]
        }
      </td>
      <td>
        {
          isEditing ?
          <input type="text" value={names[1]} onChange={handleChangeName} /> :
          names[0]
        }
      </td>
      <td>
        <ActionButtons
          onEdit={() => {handleEdit()}}
          onSave={() => {handleSave()}}
          onCancel={() => {handleCancel()}}
          onRemove={() => {handleRemove()}}
          isEditing={isEditing}
        />
      </td>
    </tr>
  )
}

export default ColorColumn
