import App from '../components/app'
import Title from '../components/title'
import styles from '../styles/Main.module.css'
import Image from 'next/image'

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
              <Image
                src="/storage/face.png"
                alt="りんかく"
                width={60}
                height={60}
              />
            </td>
            <td>
              <Image
                src="/storage/face_line.png"
                alt="りんかく線"
                width={60}
                height={60}
              />
            </td>
            <td>
              <Image
                src="/storage/face_mask.png"
                alt="りんかく マスク"
                width={60}
                height={60}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </App>
  )
}
