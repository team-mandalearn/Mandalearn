"use client"

import { useState } from "react"
import Image from "next/image"

import PostForm from "@/app/components/layouts/Post-form/Post.form";
import styles from "./post.module.scss"

export default function PostIndex({stopWatch}) {
  const [isDisp, setIsDisp] = useState(false)
  const buttonHandler = () => {
    setIsDisp(prev => !prev)
  }
  return (
    <>
      <div className={styles.post}>
        <span className={isDisp ? styles.mask : styles.mask_hidden} onClick={buttonHandler}></span>
        <button className={styles.post_icon} onClick={buttonHandler}>
          <Image
            className={isDisp ? styles.post_icon_hidden : styles.post_icon_diary}
            src="/diary.svg"
            fill
            sizes="100%"
            alt="post-icon"
            style={{ fill: 'red' }}
          />
          <Image
            className={isDisp ? styles.post_icon_pen : styles.post_icon_hidden}
            src="/pen.svg"
            fill
            sizes="100%"
            alt="post-icon"
            style={{ fill: 'red' }}
          />
        </button>
        <PostForm isDisp={isDisp} stopWatch={stopWatch}/>
      </div>
    </>
  )
}