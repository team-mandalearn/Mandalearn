import Image from "next/image";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import MainIndex from "@/app/components/feature/main/Main.index";
import Header from "@/app/components/layouts/Header/Header";

export const metadata = {
  title: 'MandaLearn'
}

export default async function Home() {
  const session = await getServerSession()
  if (!session || !session.user) {
    return (
      redirect("/login")
    )
  }
  return (
    <>
      <Header />
      <main>
        home<br />
        home<br />
        home<br />
        <MainIndex />
      </main>
    </>
  );
}
