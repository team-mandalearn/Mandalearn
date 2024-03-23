import {Josefin_Slab, Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth"
import SessionProvider from "./components/utils/SessionProvider"
import Header from "@/app/components/layouts/Header/Header";



const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
})
const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  variable: '--font-josefin'
})
const num = Josefin_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  variable: '--font-num'
})

export const metadata = {
  title: {
    template: 'MandaLearn | %s',
  },
  description: "Apprentice success app",
};


export default async function RootLayout({ children }) {
  const session = await getServerSession()
  if(session){
    return (
      <html lang="ja">
        <body className={`${josefin.variable} ${num.variable} ${inter.className}`}>
          <SessionProvider session={session}>
            <Header/>
            {children}
          </SessionProvider>
        </body>
      </html>
    )
  }
  return(
    <html lang="ja">
    <body className={`${josefin.variable} ${num.variable} ${inter.className}`}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </body>
  </html>
  )
}
