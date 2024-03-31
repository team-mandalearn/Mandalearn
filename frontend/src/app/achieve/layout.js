import Header from "@/app/components/layouts/Header/Header"

export default function AcheiveLayout({ children }){
  return (
    <>
      <Header />
      {children}
    </>
  )
}