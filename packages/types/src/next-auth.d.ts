
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      FirstName: string | undefined | null;
      LastName: string | undefined | null;
      Authtype: string | undefined | null;
      Authenticated: boolean | undefined | null;
      AccountType: string | undefined | null;
      AdditionalDetails: {
        Gender: 'Male' | 'Female' | null;
        DateofBirth: Date | null;
        about: string;
        contactNumber: string;
      };
    } & DefaultSession["user"];
  }
}
