import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import SkinColumn from '../components/skinColumn'
import { Skin } from '../interfaces/skin'
import styles from '../styles/Main.module.scss'
import { useState } from 'react'
import useSWR from 'swr'

type Props = {
  skins: Skin[]
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export async function getServerSideProps() {
  const data = await fetcher(process.env.apiEndpointInner + '/skin')
  return { props: { skins: data } }
}

const SkinPage = (props: Props) => {
  const {data, error} = useSWR(process.env.apiEndpointOuter + '/skin', fetcher, {initialData: props.skins})
  const [skins, setSkins] = useState<Skin[]>(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  /**
   * 追加処理.
   */
  const handleCreate = () => {
    const skins_update = skins.slice()
    const orders = skins_update.map(data => {return data.order})
    skins_update.push({
      id: Math.random().toString(32).substring(2),
      order: orders.length > 0 ? Math.max(...orders) + 1 : 1,
      code: '#000000',
      isCreate: true,
    })
    setSkins(skins_update)
  }

  /**
   * 削除処理.
   * @param id 削除対象のID
   */
  const handleRemove = (id: string) => {
    const skins_update = skins.slice()
    skins_update.some((data, index) => {
      if (data.id === id) {
        skins_update.splice(index, 1)
      }
    })
    setSkins(skins_update)
  }

  return (
    <App active="skin">
      <Title
        name="はだ色"
        onCreate={() => {handleCreate()}}
      />

      <table className={styles.table}>
        <TableHead
          heads={['Order', 'Color', 'Color code', 'Action']}
        />
        <tbody>
          {skins.map((value) => (
            <SkinColumn
              key={value.order}
              value={value}
              onRemove={(id: string) => {handleRemove(id)}}
            />
          ))}
        </tbody>
      </table>
    </App>
  )
}

export default SkinPage
