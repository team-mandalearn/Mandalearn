"use client"

import Link from "next/link";
import { useStopwatch } from "react-timer-hook"

import styles from "./header.module.scss"
import HeaderLimitTimer from "@/app/components/layouts/Header/Header.limitTimer";
import HeaderTimer from "@/app/components/layouts/Header/Header.timer";
import HeaderNav from "@/app/components/layouts/Header/Header.nav";
import PostIndex from "@/app/components/layouts/Post-form/Post";
import { createContext } from "react";
export const stopWatchContext = createContext()

export default function Header({ user }) {

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  const stopWatch = {
    totalSeconds: totalSeconds,
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    start: start,
    pause: pause,
    isRunning: isRunning
  }
  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.header_logo}>
          <Link href="/">
            MandaLearn
          </Link>
        </h3>
        <HeaderNav />
        <HeaderLimitTimer user={user} />
        <HeaderTimer stopWatch={stopWatch} />
      </div>
      <stopWatchContext.Provider value={stopWatch}>
        <PostIndex />
      </stopWatchContext.Provider>
    </>
  )
}