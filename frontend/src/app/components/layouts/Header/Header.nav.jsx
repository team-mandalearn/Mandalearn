"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.scss"
import Link from "next/link"
import Image from "next/image"

export default function HeaderNav() {
  const { data: session } = useSession()
  if (session) {
    return (
      <ul className={styles.header_nav}>
        <li className={styles.header_nav_item}>
          <div className={styles.header_nav_icon}>
            <Image src={`${session.user.image}`} fill sizes="100%" alt="author image" />
          </div>
          <span className={styles.header_nav_name}>{session.user.name}</span>
        </li>
        <li className={styles.header_nav_item}>
          <button onClick={() => signOut()}>Status</button>
        </li>
        <li className={styles.header_nav_item}>
          <Link href="/setting">Setting</Link>
        </li>
        <li className={styles.header_nav_item}>
          <button onClick={() => signOut()}>signOut</button>
        </li>
      </ul>
    )
  }
  return (
    <>
      Not signed in<br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}