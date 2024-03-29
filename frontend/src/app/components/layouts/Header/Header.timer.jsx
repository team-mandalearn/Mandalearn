"use client"

import React from 'react';
import styles from "./header.module.scss"

export default function HeaderLimitTimer() {
  return(
    <>
    <span className={styles.header_timer}>00:00:00</span>
    </>
  )
}