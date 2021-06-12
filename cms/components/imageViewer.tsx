import styles from '../styles/ImageViewer.module.scss'

type Props = {
  src: string[],
  alt: string,
}

const ImageViewer = (props: Props) => (
  <div className={styles.container}>
    {props.src.map((layer, index) => (
      <img
        key={index}
        src={layer}
        alt={props.alt}
        className={styles.viewer}
      />
    ))}
  </div>
)

export default ImageViewer
