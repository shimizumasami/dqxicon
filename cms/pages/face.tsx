import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ImageEditor from '../components/imageEditor'
import ImageViewer from '../components/imageViewer'
import { Face } from '../interfaces/face'
import styles from '../styles/Main.module.scss'
import { useState } from 'react'
import useSWR from 'swr'

type Props = {
  face: Face
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export async function getServerSideProps() {
  const data = await fetcher(process.env.apiEndpointInner + '/face')
  return { props: { face: data } }
}

const FacePage = (props: Props) => {
  const {data, error} = useSWR(process.env.apiEndpointOuter + '/face', fetcher, {initialData: props.face})
  const [face, setFace] = useState<Face>(data)

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
          heads={['Image', 'Image line', 'Image mask']}
        />
        <tbody>
          <tr>
            <td>
              <ImageViewer
                src={[face.mask, face.line]}
                alt="りんかく"
              />
            </td>
            <td>
              <ImageEditor
                src={face.line}
                alt="りんかく 線"
              />
            </td>
            <td>
              <ImageEditor
                src={face.mask}
                alt="りんかく マスク"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </App>
  )
}

export default FacePage
