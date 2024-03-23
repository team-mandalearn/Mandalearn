import styles from "./header.module.scss"
export default function HeaderTimer() {
  return (
    <div className={styles.header_timer}>
      <h3>00:00:00</h3>
    </div>
  )
}