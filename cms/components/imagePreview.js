import styles from '../styles/ImagePreview.module.css'

export default function ImagePreview(props) {
  return (
    <div className={styles.container}>
      {props.src.map((layer) => (
        <img
          src={layer}
          alt={props.alt}
          className={styles.preview}
        />
      ))}
    </div>
  )
}
