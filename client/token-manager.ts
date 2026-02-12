import { Session } from 'next-auth';

class TokenManager {
  private token: string | null = null;
  private refreshPromise: Promise<string> | null = null;
  private tokenExpiresAt: number | null = null;

  /**
   * Get a valid JWT token, refreshing if necessary
   */
  async getToken(session: Session | null): Promise<string | null> {
    if (!session) return null;

    // Return cached token if still valid
    if (this.token && this.tokenExpiresAt && Date.now() < this.tokenExpiresAt) {
      return this.token;
    }

    // Use existing refresh promise if one is in flight
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    // Fetch new token
    this.refreshPromise = this.fetchToken(session);
    try {
      const token = await this.refreshPromise;
      this.token = token;
      // Set expiry to 55 minutes (JWT is typically 1 hour)
      this.tokenExpiresAt = Date.now() + 55 * 60 * 1000;
      return token;
    } finally {
      this.refreshPromise = null;
    }
  }

  /**
   * Fetch a fresh token from the backend
   */
  private async fetchToken(session: Session): Promise<string> {
    const userId = (session as any).id;
    if (!userId) {
      throw new Error('No user ID in session');
    }

    const response = await fetch('https://api.georgesheppard.dev/mcp/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.token;
  }

  /**
   * Invalidate the cached token (call when 401 error occurs)
   */
  invalidate(): void {
    this.token = null;
    this.tokenExpiresAt = null;
  }

  /**
   * Check if we have a valid token
   */
  hasValidToken(): boolean {
    return this.token !== null && this.tokenExpiresAt !== null && Date.now() < this.tokenExpiresAt;
  }
}

export const tokenManager = new TokenManager();
