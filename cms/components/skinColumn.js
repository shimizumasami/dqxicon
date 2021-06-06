import ColorEditor from '../components/colorEditor'
import ActionButtons from '../components/actionButtons'
import react from "react"

class SkinColumn extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  handleEdit() {
    this.setState({isEditing: true})
  }
  handleSave() {
    this.setState({isEditing: false})
  }
  handleCancel() {
    this.setState({isEditing: false})
  }

  render() {
    return (
      <tr>
        <td>{this.props.value.order}</td>
        <td><ColorEditor color={this.props.value.code}/></td>
        <td>
          {
            this.state.isEditing ?
            <input type="text" defaultValue={this.props.value.code} /> :
            this.props.value.code
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

export default SkinColumn
