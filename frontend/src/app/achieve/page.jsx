import AchieveIndex from "@/app/components/feature/achieve/Achive.index";

export const metadata = {
  title: 'About',
}
export default async function Achieve() {
  const session = await getServerSession()
  if (!session || !session.user) {
    return (
      redirect("/login")
    )
  }
  return (
    <AchieveIndex />
  )
}