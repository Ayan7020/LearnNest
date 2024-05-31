import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" { 
  interface Session {
    user: { 
      FirstName: string | undefined | null
      Authtype: string | undefined | null,
      Authenticated: boolean | undefined | null, 
      AccountType: string | undefined | null
    } & DefaultSession["user"]
  }
}