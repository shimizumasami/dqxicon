import styles from '../styles/ImageEditor.module.scss'

export default function ImageEditor(props) {
  return (
    <div className={styles.container}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.editor}
      />
      <div className={styles.cover}>
        <img src="/icon_edit.svg" className={styles.edit} />
      </div>
    </div>
  )
}
