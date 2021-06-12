import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorColumn from '../components/colorColumn'
import { Color } from '../interfaces/color'
import styles from '../styles/Main.module.scss'
import React, { useState } from 'react'

type Props = {
  colors: Color[],  
}

const ColorPage = (props: Props) => {
  const [colors, setColors] = useState(props.colors)

  /**
   * 追加処理.
   */
  const handleCreate = () => {
    const colors_update = colors.slice()
    const orders = colors_update.map(data => {return data.order})
    colors_update.push({
      id: Math.random().toString(32).substring(2),
      order: orders.length > 0 ? Math.max(...orders) + 1 : 1,
      name: '新しい色',
      code: '#000000',
      isCreate: true,
    })
    setColors(colors_update)
  }

  /**
   * 削除処理.
   * @param id 削除対象のID
   */
  const handleRemove = (id: string) => {
    const colors_update = colors.slice()
    colors_update.some((data, index) => {
      if (data.id === id) {
        colors_update.splice(index, 1)
      }
    })
    setColors(colors_update)
  }

  return (
    <App active="color">
      <Title
        name="色"
        onCreate={() => {handleCreate()}}
      />

      <table className={styles.table}>
        <TableHead
          heads={['Order', 'Color', 'Color code', 'Name', 'Action']}
        />
        <tbody>
          {colors.map((value) => (
            <ColorColumn
              key={value.id}
              value={value}
              onRemove={(id: string) => {handleRemove(id)}}
            />
          ))}
        </tbody>
      </table>
    </App>
  )
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
