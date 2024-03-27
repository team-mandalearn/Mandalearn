"use client"

import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./header.module.scss"
import { useTimer } from 'react-timer-hook';

export default function HeaderLimitTimer() {
  const now = new Date()
  const setTimer = () => {
    const nextScheduledTime = new Date()
    nextScheduledTime.setDate(now.getDate() + 1)
    nextScheduledTime.setHours(21, 23, 0, 0)
    const timeRemaining = nextScheduledTime.getTime() - now.getTime()
    return timeRemaining
  }
  const timeRemaining = setTimer()
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: now.getTime() + timeRemaining,
    autoStart: true,
    onExpire: () => {
      const timeRemaining = setTimer()
      restart(now.getTime() + timeRemaining);
    }
  })
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  return (
    <div className={styles.header_limit}>
      <h3 className={styles.header_limit_title}>
        Time Limit &nbsp;
      </h3>
      <span
        className={`${hours <= 0 ? styles.header_limit_timer_alart : ''} ${styles.header_limit_timer} `}
        suppressHydrationWarning>
        {`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}
      </span>
    </div>
  );
}