import styles from '../styles/Title.module.scss'

type Props = {
  name: string,
  useCreate: boolean,
  onCreate: (event: any) => void,
}

const Title = (props: Props) => {
  const button = props.useCreate ? <button type="button" onClick={props.onCreate}>追加</button> : ''

  return (
    <div className={styles.title_bar}>
      <span className={styles.title}>{props.name}</span>
      {button}
    </div>
  )
}

Title.defaultProps = {
  useCreate: true,
  onCreate: null,
}

export default Title
