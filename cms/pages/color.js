import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorColumn from '../components/colorColumn'
import styles from '../styles/Main.module.scss'

function Color({colors}) {
  return (
    <App active="color">
      <Title name="色" />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Color', 'Color code', 'Name', 'Action']}
        />
        <tbody>
          {colors.map((value) => (
            <ColorColumn value={value} key={value.id} />
          ))}
        </tbody>
      </table>
    </App>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.apiEndpointInner + '/color')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      colors: data
    },
  }
}

export default Color
