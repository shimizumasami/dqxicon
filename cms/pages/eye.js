import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ImageEditor from '../components/imageEditor'
import ImageViewer from '../components/imageViewer'
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
                <button type="image" className={styles.edit}><Image src="/icon_edit.svg" alt="edit" width={16} height={16}/></button>
                <button type="image" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>
                <button type="image" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>
                <button type="image" className={styles.trash}><Image src="/icon_trash.svg" alt="move to trash" width={14} height={14}/></button>
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
