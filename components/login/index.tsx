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
          <div className="text-center text-5xl text-orange-400 font-bold mt-5">
            {user.name}
          </div>
          <div className="flex align-center justify-center mt-5 ">
            <img
              className="w-64 rounded-full"
              src={user.image ? user.image : undefined}
            />
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-orange-400 w-2/6 h-10 rounded-lg text-white font-bold"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <button
            className="bg-orange-400 w-2/6 h-10 rounded-lg text-white font-bold"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}

export default LoginArea
