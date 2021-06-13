import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorColumn from '../components/colorColumn'
import { Color } from '../interfaces/color'
import styles from '../styles/Main.module.scss'
import React, { useState } from 'react'
import useSWR from 'swr'

type Props = {
  colors: Color[]
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export async function getServerSideProps() {
  const data = await fetcher(process.env.apiEndpointInner + '/color')
  return { props: { colors: data } }
}

const ColorPage = (props: Props) => {
  const {data, error} = useSWR(process.env.apiEndpointOuter + '/color', fetcher, {initialData: props.colors})
  const [colors, setColors] = useState<Color[]>(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

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

export default ColorPage
