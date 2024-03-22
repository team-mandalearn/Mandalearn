"use client"
import { signIn, signOut, useSession } from "next-auth/react"
export default function HeaderButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user.name}<br />
        <button onClick={() => signOut()}>signOut</button>
      </>
    )
  }
  return (
    <>
      Not signed in<br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}