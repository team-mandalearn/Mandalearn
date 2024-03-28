import styles from "./header.module.scss"
import HeaderLimitTimer from "@/app/components/layouts/Header/Header.limitTimer";
import HeaderTimer from "@/app/components/layouts/Header/Header.timer";
import HeaderNav from "@/app/components/layouts/Header/Header.nav";
import GetUserInfo from "@/app/components/utils/GetUserInfo";

export default async function Header() {
  const user = await GetUserInfo()
  return (
    <div className={styles.header}>
      <h3 className={styles.header_logo}>
        MandaLearn
      </h3>
      <HeaderNav />
      <HeaderLimitTimer user={user} />
      <HeaderTimer />
    </div>
  )
}