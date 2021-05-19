import styles from '../styles/ImageEditor.module.css'

export default function ImageEditor(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={styles.editor}
    />
  )
}
