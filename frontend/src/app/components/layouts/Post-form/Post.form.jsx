import { useForm, SubmitHandler } from "react-hook-form"

import styles from "./post.module.scss"
import { useContext } from "react"
import { stopWatchContext } from "@/app/components/layouts/Header/Header"
import axios from "axios";

export default function PostForm({ isDisp }) {
  const timerData = useContext(stopWatchContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    console.log(watch('time'))
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
    console.log(data)
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
        <input
          type="text"
          className={styles.form_item_input}
          {...register("quest")}
        />
      </div>

      <div className={styles.form_item}>
        <label htmlFor="comment" className={styles.form_item_label}>
          Study Summary<span>振り返り</span>
        </label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          {...register("comment")}
        ></textarea>
      </div>
      <button
        className={styles.form_button}
      >
        POST
      </button>
      <button
        className={styles.form_button}
        onClick={saveHandler}>SAVE</button>
    </form>
  )
}