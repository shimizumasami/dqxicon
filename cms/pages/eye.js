import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ImageEditor from '../components/imageEditor'
import ImageViewer from '../components/imageViewer'
import ActionButtons from '../components/actionButtons'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'

function Eye({eyes}) {
  return (
    <App active="eye">
      <Title
        name="め"
      />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Image', 'Image line', 'Image mask', 'Action']}
        />
        <tbody>
          {eyes.map((eye) => (
            <tr key={eye.order}>
              <td>{eye.order}</td>
              <td>
                <ImageViewer
                  src={["/storage/face_mask.png", "/storage/face_line.png", eye.mask, eye.line]}
                  alt="め"
                />
              </td>
              <td>
                <ImageEditor
                  src={eye.line}
                  alt="め 線"
                />
              </td>
              <td>
                <ImageEditor
                  src={eye.mask}
                  alt="め マスク"
                />
              </td>
              <td>
                <ActionButtons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </App>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://172.30.0.3:3001/eye`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      eyes: data
    },
  }
}

export default Eye
