import Image from "next/image";
import {getServerSession} from "next-auth"
import { redirect } from "next/navigation";

export const metadata = {
  title: 'MandaLearn'
}

export default async function Home() {
  const session = await getServerSession()
  if(!session || !session.user){
    return(
      redirect("/login")
    )
  }
  return (
    <main>
      home<br/>
      home<br/>
      home<br/>
    </main>
  );
}
