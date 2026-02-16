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
      // Store tokens and expiration time on first login
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = (account.expires_at ?? 0) * 1000; // Convert to milliseconds
      }

      // Check if token needs refreshing (refresh if expires in less than 60 seconds)
      if (token.expiresAt && Date.now() >= token.expiresAt - 60000) {
        try {
          const response = await fetch(
            `${process.env.ENV_AWS_COGNITO_CLIENT_ISSUER}/oauth2/token`,
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                client_id: process.env.ENV_AWS_COGNITO_CLIENT_ID ?? "",
                client_secret: process.env.ENV_AWS_COGNITO_CLIENT_SECRET ?? "",
                grant_type: "refresh_token",
                refresh_token: token.refreshToken as string,
              }),
            }
          );

          if (!response.ok) throw new Error("Failed to refresh token");

          const refreshed = await response.json();
          return {
            ...token,
            accessToken: refreshed.access_token,
            expiresAt: (Date.now() + refreshed.expires_in * 1000),
            refreshToken: refreshed.refresh_token ?? token.refreshToken, // Cognito may return new refresh token
          };
        } catch (error) {
          console.error("Token refresh failed:", error);
          return token;
        }
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
