import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOG_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
