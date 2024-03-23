"use client"

import { signIn } from "next-auth/react"
import styles from "./login.module.scss"

export default function LoginForm() {
  return (
    <div className={styles.login}>
      <div className={styles.login_form}>
        <h1 className={styles.login_form_title}>
          MandaLearn
        </h1>
        <button className={styles.login_form_button} onClick={() => { signIn() }}>
          Login with Discord
        </button>
      </div>
    </div>
  )
}