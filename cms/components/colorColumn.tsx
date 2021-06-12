import ColorEditor from './colorEditor'
import ActionButtons from './actionButtons'
import { Color } from '../interfaces/color'
import react from 'react'
import axios from 'axios'

type Props = {
  value: Color,
  onRemove: (event: any) => void,
}

type State = {
  isCreate: boolean,
  isEditing: boolean,
  id: string,
  order: number,
  code: string[],
  name: string[],
}

class ColorColumn extends react.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      isCreate: props.value.isCreate ?? false,
      isEditing: props.value.isCreate ?? false,
      id: props.value.id,
      order: props.value.order,
      code: Array(2).fill(props.value.code),
      name: Array(2).fill(props.value.name),
    }
    this.handleChangeCode = this.handleChangeCode.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  /**
   * 編集開始処理.
   */
  handleEdit() {
    this.setState({isEditing: true})
  }
  /**
   * 保存処理.
   */
  handleSave() {
    const code = this.state.code.slice()
    const name = this.state.name.slice()
    code[0] = code[1]
    name[0] = name[1]
    this.setState({
      isCreate: false,
      isEditing: false,
      code: code,
      name: name,
    })

    let method
    let url
    let data = {
      order: this.state.order,
      code: code[1],
      name: name[1],
    }
    if (this.state.isCreate) {
      console.log('post create')
      method = 'post'
      url = process.env.apiEndpointOuter + '/color'
    } else {
      console.log('put edit: ' + this.state.id)
      method = 'put'
      url = process.env.apiEndpointOuter + '/color/' + this.state.id
    }
    axios({
      method: method,
      url: url,
      data: data
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          id: res.data.data.id,
          order: res.data.data.order,
          code: Array(2).fill(res.data.data.code),
          name: Array(2).fill(res.data.data.name),
        })
      })
      .catch(res => {
        console.log(res.data)
      })
  }
  /**
   * キャンセル処理.
   */
  handleCancel() {
    this.state.isCreate ? this.cancelCreate() : this.cancelEdit()
  }
  /**
   * 削除処理.
   */
  handleRemove() {
    axios({
      method: 'delete',
      url: process.env.apiEndpointOuter + '/color/' + this.state.id,
    })
      .then(res => {
        console.log(res.data)
        this.props.onRemove(this.state.id)
      })
      .catch(res => {
        console.log(res.data)
      })
  }

  /**
   * コード入力欄変更時の表示同期.
   */
   handleChangeCode(event) {
    const code = this.state.code.slice()
    code[1] = event.target.value
    this.setState({code: code})
  }
  /**
   * 名前入力欄変更時の表示同期.
   */
  handleChangeName(event) {
    const name = this.state.name.slice()
    name[1] = event.target.value
    this.setState({name: name})
  }

  /**
   * 追加をキャンセル.
   */
  cancelCreate() {
    this.props.onRemove(this.state.id)
  }
  /**
   * 編集をキャンセル.
   */
  cancelEdit() {
    const code = this.state.code.slice()
    const name = this.state.name.slice()
    code[1] = code[0]
    name[1] = name[0]
    this.setState({
      isEditing: false,
      code: code,
      name: name,
    })
  }

  render() {
    return (
      <tr>
        <td>{this.state.order}</td>
        <td><ColorEditor color={this.state.code[1]}/></td>
        <td>
          {
            this.state.isEditing ? 
            <input type="text" value={this.state.code[1]} onChange={this.handleChangeCode} /> :
            this.state.code[0]
          }
        </td>
        <td>
          {
            this.state.isEditing ?
            <input type="text" value={this.state.name[1]} onChange={this.handleChangeName} /> :
            this.state.name[0]
          }
        </td>
        <td>
          <ActionButtons
            onEdit={() => {this.handleEdit()}}
            onSave={() => {this.handleSave()}}
            onCancel={() => {this.handleCancel()}}
            onRemove={() => {this.handleRemove()}}
            isEditing={this.state.isEditing}
          />
        </td>
      </tr>
    )
  }
}

export default ColorColumn
