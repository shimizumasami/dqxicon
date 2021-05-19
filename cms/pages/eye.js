import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import styles from '../styles/Main.module.scss'

export default function Eye() {
  return (
    <App active="eye">
      <Title
        name="め"
      />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Image line', 'Image mask', 'Action']}
        />
      </table>
    </App>
  )
}
