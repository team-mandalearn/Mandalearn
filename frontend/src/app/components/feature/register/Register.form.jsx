"use client"

import axios from "axios"
import styles from "./register.module.scss"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function RegisterForm() {
  const { data: session } = useSession()
  const handleSubmit = async (formData) => {
    const rawFormData = {
      email: session.user.email,
      generaion: formData.get('generate'),
      language: formData.get('language') == 'PHP' ? 1 : 2,
      time: formData.get('time')
    }
    const res = await axios.post('http://localhost:3000/api/auth/register', rawFormData)
    return redirect('/')
  }
  return (
    <div className={styles.register}>
      <form action={handleSubmit} className={styles.register_form}>
        <h1 className={styles.register_form_title}>MandaLearn</h1>
        <fieldset className={styles.register_item}>
          <input
            className={styles.register_item_input}
            type="number"
            placeholder="What generation are you?"
            name="generate"
            autoComplete="number"
          />
        </fieldset>
        <fieldset className={styles.register_item}>
          <input
            className={styles.register_item_input}
            type="text"
            placeholder="PHP or Ruby"
            name="language"
            autoComplete="text"
          />
        </fieldset>
        <fieldset className={styles.register_item}>
          <input
            className={styles.register_item_input}
            type="time"
            placeholder="00:00:00"
            name="time"
            autoComplete="time"
          />
        </fieldset>
        <button className={styles.register_form_button}
        >
          Set up
        </button>
      </form>
    </div>
  )
}