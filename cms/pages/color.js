import App from '../components/app'
import Title from '../components/title'
import ColorEditor from '../components/colorEditor'
import styles from '../styles/Main.module.css'
import Image from 'next/image'

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
              <td><ColorEditor color={color.code}/></td>
              <td>{color.code}</td>
              <td>{color.name}</td>
              <td>
                <button type="image" className={styles.up}><Image src="/icon_up.svg" alt="up" width={14} height={14}/></button>
                <button type="image" className={styles.down}><Image src="/icon_down.svg" alt="down" width={14} height={14}/></button>
                <button type="image" className={styles.trash}><Image src="/icon_trash.svg" alt="move to trash" width={14} height={14}/></button>
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
