import Header from "@/app/components/layouts/Header/Header"

export default function CurriculumLayout({ children }){
  return (
    <>
      <Header />
      {children}
    </>
  )
}