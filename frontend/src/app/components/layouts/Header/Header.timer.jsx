import Image from "next/image";
import styles from "./header.module.scss"
export default function HeaderTimer({ stopWatch }) {

  const playHandler = () => {
    if (stopWatch.isRunning) {
      stopWatch.pause()
    } else {
      stopWatch.start()
    }
  }
  return (
    <div className={styles.header_timer}>
      <button className={styles.header_timer_button} onClick={playHandler}>
        <Image src={stopWatch.isRunning ? "./stop.svg" : "./play.svg"} fill sizes="100%" alt="play-icon" />
      </button>
      <h3 className={styles.header_timer_disp}>{stopWatch.hours}:{stopWatch.minutes}:{stopWatch.seconds}</h3>
      <span></span>
    </div>
  )
}