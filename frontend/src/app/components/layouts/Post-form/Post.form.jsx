import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";

import { stopWatchContext } from "@/app/components/layouts/Header/Header"

import styles from "./post.module.scss"
import { curriculums } from "@/app/components/utils/Curriculums";
import { motion } from "framer-motion";

export default function PostForm({ isDisp }) {
  const timerData = useContext(stopWatchContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const isConfirmed = confirm('Discordに投稿します!!\n本当に良いですか？')
    if (isConfirmed) {
      const inputData = {
        time: watch('time'),
        quest: watch('quest'),
        comment: watch('comment')
      }
      const discordRes = await axios.post("http://localhost:3000/api/dailyLog/discord", inputData)
      const backendRes = await axios.post('http://localhost:3000/api/dailyLog', inputData)
      alert('OK')
    } else {
      alert('やーめた')
    }
  }

  const saveHandler = async (e) => {
    e.preventDefault()
    const inputData = {
      time: watch('time'),
      quest: watch('quest'),
      comment: watch('comment')
    }
    const res = await axios.post('http://localhost:3000/api/dailyLog', inputData)
    const data = await res.data
    alert('一時保存できました！')
  }

  return (
    <form
      className={isDisp ? styles.post_form_disp : styles.post_form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={styles.form_title}>
        Daily Log
      </h3>

      <div className={styles.form_item}>
        <label className={styles.form_item_label}>
          Study Time<span>学習時間</span>
        </label>
        <input
          type="time"
          className={styles.form_item_input}
          {...register("time")}
          value={`${timerData.hours}:${timerData.minutes}:${timerData.seconds}`}
          onFocus={() => { timerData.pause() }}
        />
      </div>

      <div className={styles.form_item}>
        <label className={styles.form_item_label}>
          Study Contents<span>学習内容</span>
        </label>
        <select {...register("quest")} className={styles.form_item_input}>
          {
            curriculums.map((curriculum, index) => {
              return (
                <option value={curriculum.name} key={index}>
                  {curriculum.name}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className={styles.form_item}>
        <label htmlFor="comment" className={styles.form_item_label}>
          Study Summary<span>振り返り</span>
        </label>
        <textarea
          id="comment"
          cols="30"
          rows="7"
          {...register("comment")}
        ></textarea>
      </div>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        className={styles.form_button}
      >
        POST
      </motion.button>
      <motion.button
        className={styles.form_button}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        onClick={saveHandler}>SAVE</motion.button>
    </form>
  )
}