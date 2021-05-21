import styles from '../styles/ImageViewer.module.scss'

export default function ImageViewer(props) {
  return (
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
}
