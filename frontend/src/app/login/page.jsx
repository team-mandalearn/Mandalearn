import LoginIndex from "@/app/components/feature/login/Login.index";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Login',
}

export default async function Login() {
  const session = await getServerSession()
  if (!session || !session.user) {
    return (
      <LoginIndex />
    )
  }
  return (
    redirect('/')
  )
}