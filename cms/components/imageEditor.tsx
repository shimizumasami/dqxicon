import ImageViewer from '../components/imageViewer'
import styles from '../styles/ImageEditor.module.scss'

type Props = {
  src: string,
  alt: string,
}

const ImageEditor = (props: Props) => (
  <div className={styles.container}>
    <ImageViewer
      src={[props.src]}
      alt={props.alt}
    />
    <div className={styles.cover}>
      <img src="/icon_edit.svg" className={styles.edit} />
    </div>
  </div>
)

export default ImageEditor
