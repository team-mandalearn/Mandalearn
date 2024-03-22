import Image from "next/image";
import {getServerSession} from "next-auth"
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession()
  if(!session || !session.user){
    return(
      redirect("/api/auth/signin")
    )
  }
  console.log(session)
  return (
    <main>
      {session.user.name}
      Home
    </main>
  );
}
