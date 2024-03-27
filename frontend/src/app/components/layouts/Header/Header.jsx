import styles from "./header.module.scss"
import HeaderLimitTimer from "@/app/components/layouts/Header/Header.limitTimer";
import HeaderTimer from "@/app/components/layouts/Header/Header.timer";
import HeaderNav from "@/app/components/layouts/Header/Header.nav";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <h3 className={styles.header_logo}>
        <Link href="/">
        MandaLearn
        </Link>
      </h3>
      <HeaderNav />
      <HeaderLimitTimer />
      <HeaderTimer />
    </div>
  )
}