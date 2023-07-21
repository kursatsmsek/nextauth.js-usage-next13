import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "134521215817-majf3439vilte7o2vhh2tedeem75b7vv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
})

export { handler as GET, handler as POST }
