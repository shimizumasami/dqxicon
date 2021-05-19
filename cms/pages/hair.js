import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import styles from '../styles/Main.module.scss'

export default function Hair() {
  return (
    <App active="hair">
      <Title
        name="かみがた"
      />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Image front line', 'Image front mask', 'Image back line', 'Image back mask', 'Image twotone mask', 'Action']}
        />
      </table>
    </App>
  )
}
