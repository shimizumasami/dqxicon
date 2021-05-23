import ColorEditor from '../components/colorEditor'
import ActionButtons from '../components/actionButtons'
import react from "react"

class SkinColumn extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
    }
  }

  handleEdit() {
    this.setState({isEdit: true})
  }
  handleEditSave() {
    this.setState({isEdit: false})
  }
  handleEditCancel() {
    this.setState({isEdit: false})
  }

  render() {
    return (
      <tr>
        <td>{this.props.value.order}</td>
        <td><ColorEditor color={this.props.value.code}/></td>
        <td>
          {
            this.state.isEdit ?
            <input type="text" defaultValue={this.props.value.code} /> :
            this.props.value.code
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

export default SkinColumn
