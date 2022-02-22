import ImageViewer from '../components/imageViewer'
import styles from '../styles/ImageEditor.module.scss'

type Props = {
  src: string,
  alt: string,
  onSelected: (event: any) => void,
}

const ImageEditor = (props: Props) => (
  <div className={styles.container}>
    <ImageViewer
      src={[props.src]}
      alt={props.alt}
    />

    <label htmlFor="file_input">
      <div className={styles.cover}>
        <img src="/icon_edit.svg" className={styles.edit} />
      </div>
      <input
        type="file"
        id="file_input"
        accept="image/png"
        onChange={(file) => {props.onSelected(file)}}
      ></input>
    </label>
  </div>
)

export default ImageEditor
