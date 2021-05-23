import App from '../components/app'
import Title from '../components/title'
import TableHead from '../components/tableHead'
import ColorEditor from '../components/colorEditor'
import ActionButtons from '../components/actionButtons'
import styles from '../styles/Main.module.scss'

function Color({colors}) {
  return (
    <App active="color">
      <Title
        name="色"
      />
      <table className={styles.table}>
        <TableHead
          src={['Order', 'Color', 'Color code', 'Name', 'Action']}
        />
        <tbody>
          {colors.map((color) => (
            <tr key={color.order}>
              <td>{color.order}</td>
              <td><ColorEditor color={color.code}/></td>
              <td>{color.code}</td>
              <td>{color.name}</td>
              <td>
                <ActionButtons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </App>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://172.30.0.3:3001/color`)
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
