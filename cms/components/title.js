import styles from '../styles/Title.module.scss'

export default function Title(props) {
  return (
    <div className={styles.title_bar}>
      <span className={styles.title}>{props.name}</span>
      <button type="button" onClick={props.onCreate}>追加</button>
    </div>
  )
}
