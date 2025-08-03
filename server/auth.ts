import NextAuth, { NextAuthConfig, Session } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { RealUserId } from "../core/types/utilities";
import { db } from "./db";

export type CustomSession = Session & { id?: RealUserId };

export const authOptions: NextAuthConfig = {
  providers: [
    CognitoProvider({
      clientId: process.env.ENV_AWS_COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.ENV_AWS_COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.ENV_AWS_COGNITO_CLIENT_ISSUER,
      checks: ["nonce"],
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      console.log('session and user', session, user)
      return {
        ...session,
        id: user.id
      }
    }
  },
  trustHost: true
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
