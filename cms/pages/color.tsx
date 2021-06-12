import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorColumn from '../components/colorColumn'
import { Color } from '../interfaces/color'
import styles from '../styles/Main.module.scss'
import react from 'react'

type Props = {
  colors: Color[],  
}

type State = {
  colors: Color[],
}

class ColorPage extends react.Component<Props, State> {
  constructor(props: Props) {
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
    const orders = colors.map(data => {return data.order})
    colors.push({
      id: Math.random().toString(32).substring(2),
      order: orders.length > 0 ? Math.max(...orders) + 1 : 1,
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
  handleRemove(id: string) {
    const colors: Color[] = this.state.colors.slice()
    colors.some((data: Color, index: number) => {
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
            heads={['Order', 'Color', 'Color code', 'Name', 'Action']}
          />
          <tbody>
            {this.state.colors.map((value) => (
              <ColorColumn
                key={value.id}
                value={value}
                onRemove={(id: string) => {this.handleRemove(id)}}
              />
            ))}
          </tbody>
        </table>
      </App>
    )
  }
}

export async function getStaticProps() {
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

export default ColorPage
