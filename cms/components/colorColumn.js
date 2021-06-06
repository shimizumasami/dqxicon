import ColorEditor from '../components/colorEditor'
import ActionButtons from '../components/actionButtons'
import react from 'react'
import axios from 'axios'

class ColorColumn extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCreate: props.value.isCreate ?? false,
      isEditing: props.value.isCreate ?? false,
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
      isEditing: false,
      code: code,
      name: name,
    })

    let method
    let url;
    let data = {
      order: this.props.value.order,
      code: code[1],
      name: name[1],
    }
    if (this.state.isCreate) {
      method = 'post'
      url = process.env.apiEndpointOuter + '/color'
    } else {
      method = 'put'
      data['id'] = this.props.value.id
      url = process.env.apiEndpointOuter + '/color/' + data.id
    }
    axios({
      method: method,
      url: url,
      data: data
    })
      .then(res => {
        console.log(res.data)
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
    this.props.onRemove(this.props.value.id)
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
        <td>{this.props.value.order}</td>
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
            isEditing={this.state.isEditing}
          />
        </td>
      </tr>
    )
  }
}

export default ColorColumn
