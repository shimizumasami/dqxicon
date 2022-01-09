import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import { Face } from '../interfaces/face'
import styles from '../styles/Main.module.scss'
import { useState } from 'react'
import useSWR from 'swr'
import FaceColumn from '../components/faceColumn'

type Props = {
  face: Face
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export async function getServerSideProps() {
  const data = await fetcher(process.env.apiEndpointInner + '/face')
  return { props: { face: data } }
}

const FacePage = (props: Props) => {
  {/* 初期データ取得 */}
  const {data, error} = useSWR(process.env.apiEndpointOuter + '/face', fetcher, {initialData: props.face})
  const [face, setFace] = useState<Face>(data)

  {/* エラー表示 */}
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <App active="face">
      <Title
        name="りんかく"
        useCreate={false}
      />
      <table className={styles.table}>
        <TableHead
          heads={['Image', 'Image line', 'Image mask', 'Action']}
        />
        <tbody>
          <FaceColumn
            value={face}
          />
        </tbody>
      </table>
    </App>
  )
}

export default FacePage
