import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import SkinColumn from '../components/skinColumn'
import styles from '../styles/Main.module.scss'

function Skin({skins}) {
  return (
    <App active="skin">
      <Title name="はだ色" />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Color', 'Color code', 'Action']}
        />
        <tbody>
          {skins.map((value) => (
            <SkinColumn value={value} key={value.order} />
          ))}
        </tbody>
      </table>
    </App>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://172.30.0.3:3001/skin`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      skins: data
    },
  }
}

export default Skin
