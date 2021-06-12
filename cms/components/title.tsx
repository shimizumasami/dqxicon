import styles from '../styles/Title.module.scss'

type Props = {
  name: string,
  onCreate: (event: any) => void,
}

const Title = (props: Props) => (
  <div className={styles.title_bar}>
    <span className={styles.title}>{props.name}</span>
    <button type="button" onClick={props.onCreate}>追加</button>
  </div>
)

export default Title
