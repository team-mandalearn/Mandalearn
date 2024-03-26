import LoginIndex from "@/app/components/feature/login/Login.index";
import RegisterIndex from "@/app/components/feature/register/Register.index";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Login',
}

export default async function Login() {
  const session = await getServerSession()
  if (!session) {
    return (
      <LoginIndex />
    )
  }
  const rawEmail = session.user.email
  const email = {
    email: rawEmail
  }
  const res = await axios.post('http://localhost:3000/api/auth/login', email)
  const user = res.data
  console.log(user.id)
  if (!user.id) {
    return (
      <RegisterIndex />
    )
  }
  return (
    redirect('/')
  )
}