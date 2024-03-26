import Image from "next/image";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import MainIndex from "@/app/components/feature/main/Main.index";
import RegisterForm from "@/app/components/feature/register/Register.form";

export const metadata = {
  title: 'MandaLearn'
}

export default async function Home() {
  const session = await getServerSession()
  console.log(session)
  if (!session || !session.user) {
    return (
      redirect("/login")
    )
  }
  return (
    <main>
      home<br />
      home<br />
      home<br />
      <MainIndex />
    </main>
  );
}
