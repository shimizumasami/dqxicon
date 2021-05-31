import ColorEditor from '../components/colorEditor'
import ActionButtons from '../components/actionButtons'
import react from 'react'
import axios from 'axios'

class ColorColumn extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      code: Array(2).fill(props.value.code),
      name: Array(2).fill(props.value.name),
    }
    this.handleChangeCode = this.handleChangeCode.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeCode(event) {
    const code = this.state.code.slice()
    code[1] = event.target.value
    this.setState({code: code})
  }
  handleChangeName(event) {
    const name = this.state.name.slice()
    name[1] = event.target.value
    this.setState({name: name})
  }

  handleEdit() {
    this.setState({isEdit: true})
  }
  handleEditSave() {
    const code = this.state.code.slice()
    const name = this.state.name.slice()
    code[0] = code[1]
    name[0] = name[1]
    this.setState({
      isEdit: false,
      code: code,
      name: name,
    })
    const data = {
      code: code[1],
      name: name[1],
    }
    axios.post(process.env.apiEndpointOuter + '/color', data)
      .then(res => {
        console.log(res.data)
      })
      .catch(res => {
        console.log(res.data)
      })
  }
  handleEditCancel() {
    const code = this.state.code.slice()
    const name = this.state.name.slice()
    code[1] = code[0]
    name[1] = name[0]
    this.setState({
      isEdit: false,
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
            this.state.isEdit ? 
            <input type="text" value={this.state.code[1]} onChange={this.handleChangeCode} /> :
            this.state.code[0]
          }
        </td>
        <td>
          {
            this.state.isEdit ?
            <input type="text" value={this.state.name[1]} onChange={this.handleChangeName} /> :
            this.state.name[0]
          }
        </td>
        <td>
          <ActionButtons
            onEdit={() => {this.handleEdit()}}
            onEditSave={() => {this.handleEditSave()}}
            onEditCancel={() => {this.handleEditCancel()}}
            isEdit={this.state.isEdit}
          />
        </td>
      </tr>
    )
  }
}

export default ColorColumn
