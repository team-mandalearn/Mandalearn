import styles from "./header.module.scss"
export default function HeaderLimitTimer() {
  return (
    <div className={styles.header_limit}>
      <span className={styles.header_limit_title}>Limit</span>
      <h3 className={styles.header_limit_timer}>
        00:00:00
      </h3>
    </div>
  )
}