import Image from "next/image";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

import MainIndex from "@/app/components/feature/main/Main.index";
import Header from "@/app/components/layouts/Header/Header";
import MotionWrapper from "@/app/components/utils/MotionWrapper";
import GetUserInfo from "@/app/components/utils/GetUserInfo";

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
  const user = await GetUserInfo()
  return (

    <>
      <Header user={user} />
      <MotionWrapper>
        <main>
          <MainIndex />
        </main>
      </MotionWrapper>
    </>
  );
}
