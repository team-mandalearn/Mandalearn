import axios from "axios"
import { getServerSession } from "next-auth"

export default async function GetUserInfo(){
  const LOGIN_URL = process.env.MANDALEARN_BASE_URL + "/auth/login"
  const session = await getServerSession();
  const rawEmail = session.user.email
  const email = {
    email: rawEmail
  }
  const res = await axios.post(LOGIN_URL, email)
  const data = await res.data
  return data
}