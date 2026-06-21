/**
 * Authentication API client
 * Communicates with backend auth endpoints
 */

import { getAuthSession, postAuthLogout } from '@/client/generated/hooks';
import type { GetAuthSession200User } from '@/client/generated/hooks';
import { clearPersistedCache } from '../lib/query-persister';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export type User = GetAuthSession200User;

/**
 * Get current session from backend
 * Returns user if authenticated, throws if not
 */
export async function getSession(): Promise<User> {
  const response = await getAuthSession();
  return response.user;
}

/**
 * Initiate login flow
 * Redirects to backend which redirects to Cognito
 */
export function signIn(): void {
  const redirectUri = encodeURIComponent(window.location.href);
  window.location.href = `${API_URL}/auth/login?redirect_uri=${redirectUri}`;
}

/**
 * Logout current user
 * Clears session and redirects to Cognito logout
 */
export async function signOut(): Promise<void> {
  // Clear persisted cache immediately before redirect to prevent auto-login on return
  await clearPersistedCache();

  const redirectUri = window.location.origin;
  const response = await postAuthLogout({ redirect_uri: redirectUri });

  if (response.cognitoLogoutUrl) {
    window.location.href = response.cognitoLogoutUrl;
  }
}
