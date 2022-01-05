import styles from '../styles/ImageViewer.module.scss'

type Props = {
  src: string[],
  alt: string,
}

const ImageViewer = (props: Props) => {
  {/* src の指定がなければ no image 表示 */}
  let view: React.ReactNode = (
    <div className={styles.noimage}>
      no image
    </div>
  )

  {/* src の指定があれば順に表示 */}
  if (props.src.every(src => src)) {
    view = props.src.map((layer, index) => (
      <img
        key={index}
        src={layer}
        alt={props.alt}
        className={styles.viewer}
      />
    ))
  }

  return (
    <div className={styles.container}>
      {view}
    </div>
  )
}

export default ImageViewer
