import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { RealUserId } from "../../../core/types/utilities";

export type CustomSession = Session & { id?: RealUserId };

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.ENV_AWS_COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.ENV_AWS_COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.ENV_AWS_COGNITO_CLIENT_ISSUER,
      checks: "nonce",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Store the access token in the JWT
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID and access token to session
      (session as any).id = token.sub;
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
}

export default NextAuth(authOptions);
