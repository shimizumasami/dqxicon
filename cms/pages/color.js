import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorColumn from '../components/colorColumn'
import styles from '../styles/Main.module.scss'
import react from 'react'

class Color extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: props.colors
    }
  }

  /**
   * 追加処理.
   */
  handleCreate() {
    const colors = this.state.colors.slice()
    const ids = colors.map(data => {return data.id})
    const orders = colors.map(data => {return data.order})
    colors.push({
      id: Math.max(...ids) + 1,
      order: Math.max(...orders) + 1,
      name: '新しい色',
      code: '#000000',
      isCreate: true,
    })
    this.setState({colors: colors})
  }
  /**
   * 削除処理.
   * @param id 削除対象のID
   */
  handleRemove(id) {
    const colors = this.state.colors.slice()
    colors.some((data, index) => {
      if (data.id === id) {
        colors.splice(index, 1)
      }
    })
    this.setState({colors: colors})
  }

  render() {
    return (
      <App active="color">
        <Title
          name="色"
          onCreate={() => {this.handleCreate()}}
        />

        <table className={styles.table}>
          <TableHead
            src={['Order', 'Color', 'Color code', 'Name', 'Action']}
          />
          <tbody>
            {this.state.colors.map((value) => (
              <ColorColumn
                value={value}
                key={value.id}
                onRemove={(id) => {this.handleRemove(id)}}
              />
            ))}
          </tbody>
        </table>
      </App>
    )
  }
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.apiEndpointInner + '/color')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      colors: data
    },
  }
}

export default Color
