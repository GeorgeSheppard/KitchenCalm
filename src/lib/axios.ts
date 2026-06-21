import Axios, { AxiosRequestConfig } from 'axios';
import { signIn } from '../auth/auth-api';
import { clearPersistedCache } from './query-persister';

// Use environment variable for API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.georgesheppard.dev';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Always send cookies for auth
});

// Add response interceptor to handle 401 errors
// Following Linear's pattern: optimistically show cached data, then handle
// auth failures when API requests happen
AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const isAuthSessionEndpoint = error.config?.url?.includes('/auth/session');

      if (isAuthSessionEndpoint) {
        // Auth check returned 401 - session expired or never existed
        // Clear the persisted React Query cache and check if there was any
        const hadPersistedData = await clearPersistedCache();

        // Only auto-redirect to login if there was persisted cache data
        // This means user was expecting to be logged in (session expired)
        // If no cached data, user just logged out intentionally - show login UI naturally
        if (hadPersistedData) {
          signIn();
        }
      }
      // For 401 on other endpoints, just reject - don't handle specially
    }
    return Promise.reject(error);
  }
);

export const axiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-expect-error - Adding cancel method to promise
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};
