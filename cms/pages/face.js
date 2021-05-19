import App from '../components/app'
import Title from '../components/title'
import ImageEditor from '../components/imageEditor'
import ImagePreview from '../components/imagePreview'
import styles from '../styles/Main.module.css'

export default function Face() {
  return (
    <App active="face">
      <Title
        name="りんかく"
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Image line</th>
            <th>Image mask</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
              <ImagePreview
                src={["/storage/face_mask.png", "/storage/face_line.png"]}
                alt="りんかく"
              />
            </td>
            <td>
              <ImageEditor
                src="/storage/face_line.png"
                alt="りんかく線"
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
