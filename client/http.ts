import { AxiosError } from 'axios';
import { getApiClient, ApiError, handleApiError } from './api-client';

/**
 * Make a GET request
 */
export async function http_get<T>(path: string, params?: Record<string, any>): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.get<T>(path, { params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Make a POST request
 */
export async function http_post<T>(
  path: string,
  data?: Record<string, any>,
  params?: Record<string, any>
): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.post<T>(path, data, { params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Make a PUT request
 */
export async function http_put<T>(
  path: string,
  data?: Record<string, any>,
  params?: Record<string, any>
): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.put<T>(path, data, { params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Make a DELETE request
 */
export async function http_delete<T>(
  path: string,
  data?: Record<string, any>,
  params?: Record<string, any>
): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.delete<T>(path, { data, params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Make a PATCH request
 */
export async function http_patch<T>(
  path: string,
  data?: Record<string, any>,
  params?: Record<string, any>
): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.patch<T>(path, data, { params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Upload form data (for multipart requests like file uploads)
 */
export async function http_upload_form<T>(
  path: string,
  formData: FormData
): Promise<T> {
  try {
    const client = getApiClient();
    const response = await client.post<T>(path, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

/**
 * Post form-encoded data
 */
export async function http_post_form<T>(
  path: string,
  data: Record<string, any>
): Promise<T> {
  try {
    const client = getApiClient();
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, String(value));
    });

    const response = await client.post<T>(path, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
