"use client"

import MainTest from "@/app/components/feature/main/Main.test";
import styles from "./main.module.scss"
import MandaraIndex from "@/app/components/feature/main/mandara/Mandara.index";

export default function MainIndex(){
  return(
    <div className={styles.main}>
      <div className={styles.mandara}>
        <MandaraIndex />
      </div>
      <div className={styles.post}>
        post chart
      </div>
      <div className={styles.progress}>
        カリキュラム進行パーセント
      </div>
    </div>
  )
}