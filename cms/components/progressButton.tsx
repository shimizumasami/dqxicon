import styles from '../styles/ActionButtons.module.scss'

const ProgressButton = () => {
  return (
    <button type="button" className={styles.progress}>
      <div className={styles.circle}>
        <div className={styles.circle_inner}></div>
      </div>
    </button>
  )
}

export default ProgressButton
