"use client"
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default Login
