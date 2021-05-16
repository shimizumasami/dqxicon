import App from '../components/app'
import Title from '../components/title'
import styles from '../styles/Main.module.css'

function Color({colors}) {
  return (
    <App active="color">
      <Title
        name="色"
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order</th>
            <th>Color</th>
            <th>Color code</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => (
            <tr key={color.order}>
              <td>{color.order}</td>
              <td><div className={styles.color}></div></td>
              <td>{color.code}</td>
              <td>{color.name}</td>
              <td>
                <button className={styles.up}></button>
                <button className={styles.down}></button>
                <button className={styles.trash}></button>
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
