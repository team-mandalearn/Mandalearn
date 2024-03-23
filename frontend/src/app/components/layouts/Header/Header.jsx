import styles from "./header.module.scss"
import HeaderLimitTimer from "@/app/components/layouts/Header/Header.limitTimer";
import HeaderTimer from "@/app/components/layouts/Header/Header.timer";
import HeaderNav from "@/app/components/layouts/Header/Header.nav";

export default function Header() {
  return (
    <div className={styles.header}>
      <h3 className={styles.header_logo}>
        MandaLearn
      </h3>
      <HeaderNav />
      <HeaderLimitTimer />
      <HeaderTimer />
    </div>
  )
}