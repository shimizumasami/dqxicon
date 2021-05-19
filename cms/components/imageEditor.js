import styles from '../styles/ImageEditor.module.scss'

export default function ImageEditor(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={styles.editor}
    />
  )
}
