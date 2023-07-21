"use client"
import { signIn, signOut, useSession } from "next-auth/react"

function LoginArea() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div>
      {session?.user ? (
        [
          <div>
            <img src={session.user.image} />
          </div>,
          <div>you'r logged as {session.user.name}</div>,
          <button onClick={() => signOut()}>Sign Out</button>,
        ]
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}

export default LoginArea
