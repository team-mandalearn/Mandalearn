import CurriculumIndex from "@/app/components/feature/curriculum/Curriculum.index";
import { getServerSession } from "next-auth";

export const metadata = {
  title: 'Curriculum',
}
export default async function Curriculum() {
  const session = await getServerSession()
  if (!session || !session.user) {
    return (
      redirect("/login")
    )
  }
  return (
    <CurriculumIndex />
  )
}