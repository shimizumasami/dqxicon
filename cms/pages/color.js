import App from '../components/app'
import styles from '../styles/Main.module.css'

export default function Color() {
  return (
    <App active="color">
      <div className={styles.title_bar}>
        <span className={styles.title}>色</span>
        <button type="button">追加</button>
      </div>
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
          <tr>
            <td>1</td>
            <td><div className={styles.color}></div></td>
            <td>#FFEA77</td>
            <td>サンゴールド</td>
            <td>
              <button className={styles.up}></button>
              <button className={styles.down}></button>
              <button className={styles.trash}></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td><div className={styles.color}></div></td>
            <td>#F5FF77</td>
            <td>レモン</td>
            <td>
              <button className={styles.up}></button>
              <button className={styles.down}></button>
              <button className={styles.trash}></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td><div className={styles.color}></div></td>
            <td>#FFF577</td>
            <td>カスタード</td>
            <td>
              <button className={styles.up}></button>
              <button className={styles.down}></button>
              <button className={styles.trash}></button>
            </td>
          </tr>
        </tbody>
      </table>
    </App>
  )
}
