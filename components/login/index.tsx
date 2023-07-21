"use client"
import { signIn, signOut, useSession } from "next-auth/react"

interface IUser {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

function LoginArea() {
  const { data } = useSession()

  const user: IUser | undefined = data?.user

  return (
    <div>
      {user ? (
        <div>
          <div className="bg-black">
            <img src={user.image ? user.image : undefined} />
          </div>
          <div>you'r logged as {user.name}</div>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}

export default LoginArea
