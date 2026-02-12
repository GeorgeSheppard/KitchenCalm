import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
import { tokenManager } from './token-manager';

const BASE_URL = 'https://api.georgesheppard.dev';

let apiClient: AxiosInstance | null = null;

/**
 * Create and configure the API client with auth interceptors
 */
function createApiClient(): AxiosInstance {
  const client = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor: Add auth token
  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      try {
        const session = await getSession();
        const token = await tokenManager.getToken(session);

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor: Handle 401 and retry
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

      // If 401 and haven't retried yet, invalidate token and retry
      if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
        originalRequest._retry = true;
        tokenManager.invalidate();

        try {
          const session = await getSession();
          const token = await tokenManager.getToken(session);

          if (token && originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return client(originalRequest);
          }
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
}

/**
 * Get or create the API client
 */
export function getApiClient(): AxiosInstance {
  if (!apiClient) {
    apiClient = createApiClient();
  }
  return apiClient;
}

/**
 * Error class for API errors
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public data?: unknown,
    message?: string
  ) {
    super(message || `API Error: ${statusCode}`);
    this.name = 'ApiError';
  }
}

/**
 * Handle API errors consistently
 */
export function handleApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status || 500;
    const message = (error.response?.data as any)?.error || error.message;
    return new ApiError(statusCode, error.response?.data, message);
  }

  if (error instanceof Error) {
    return new ApiError(500, undefined, error.message);
  }

  return new ApiError(500, undefined, 'Unknown error');
}
