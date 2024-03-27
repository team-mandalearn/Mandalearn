import Image from "next/image";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import MainIndex from "@/app/components/feature/main/Main.index";
import MotionWrapper from "@/app/components/utils/MotionWrapper";

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
    <MotionWrapper>
      <main>
        <MainIndex />
      </main>
    </MotionWrapper>
  );
}
