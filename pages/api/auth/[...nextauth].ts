import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { RealUserId } from "../../../core/types/utilities";

const SESSION_MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

export type CustomSession = Session & { id?: RealUserId; error?: string };

/**
 * Refresh the access token using the refresh token from Cognito
 */
async function refreshAccessToken(token: any) {
  try {
    const response = await fetch(
      `${process.env.ENV_AWS_COGNITO_DOMAIN_URL}/oauth2/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.ENV_AWS_COGNITO_CLIENT_ID ?? "",
          client_secret: process.env.ENV_AWS_COGNITO_CLIENT_SECRET ?? "",
          grant_type: "refresh_token",
          refresh_token: token.refreshToken,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`);
    }

    const refreshed = await response.json();

    return {
      ...token,
      accessToken: refreshed.access_token,
      expiresAt: Date.now() + refreshed.expires_in * 1000,
      refreshToken: refreshed.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Token refresh error:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    maxAge: SESSION_MAX_AGE_SECONDS,
  },
  jwt: {
    maxAge: SESSION_MAX_AGE_SECONDS,
  },
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
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: (account.expires_at ?? 0) * 1000,
        };
      }

      // Refresh token if it's expired or expiring soon (within 60 seconds)
      if (token.expiresAt && Date.now() >= (token.expiresAt as number) - 60000) {
        return refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      (session as CustomSession).id = token.sub as RealUserId;
      (session as any).accessToken = token.accessToken;
      if (token.error) {
        (session as CustomSession).error = token.error as string;
      }
      return session;
    },
  },
}

export default NextAuth(authOptions);
