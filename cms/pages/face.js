import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ImageEditor from '../components/imageEditor'
import ImageViewer from '../components/imageViewer'
import styles from '../styles/Main.module.scss'

export default function Face() {
  return (
    <App active="face">
      <Title
        name="りんかく"
      />
      <table className={styles.table}>
        <TableHead
          heads={['Image', 'Image line', 'Image mask']}
        />
        <tbody>
          <tr>
            <td>
              <ImageViewer
                src={["/storage/face_mask.png", "/storage/face_line.png"]}
                alt="りんかく"
              />
            </td>
            <td>
              <ImageEditor
                src="/storage/face_line.png"
                alt="りんかく 線"
              />
            </td>
            <td>
              <ImageEditor
                src="/storage/face_mask.png"
                alt="りんかく マスク"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </App>
  )
}
