"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface ProviderProps {
  children: ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
