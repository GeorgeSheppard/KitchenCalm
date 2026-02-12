import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { http_post } from '../http';
import { queryKeys } from '../query-keys';

/**
 * S3 data types
 */
export interface SignedUrlResponse {
  signedUrl: string;
}

export interface UploadUrlResponse {
  signedUrl: string;
  key: string;
}

export interface DeleteResponse {
  success: boolean;
}

/**
 * Get a signed GET URL for downloading files from S3
 */
export const useGetSignedUrl = (
  key: string | null,
  options?: UseQueryOptions<SignedUrlResponse, Error>
) => {
  return useQuery({
    queryKey: queryKeys.s3.signedUrl(key || ''),
    queryFn: () =>
      http_post<SignedUrlResponse>('/kitchencalm/s3/signed-url', { key }),
    enabled: !!key,
    staleTime: 1 * 60 * 1000, // 1 minute - signed URLs are short-lived
    ...options,
  });
};

/**
 * Get a signed PUT URL for uploading files to S3
 */
export const useGetUploadUrl = (
  options?: UseMutationOptions<
    UploadUrlResponse,
    Error,
    { fileName: string; contentType: string }
  >
) => {
  return useMutation({
    mutationFn: ({ fileName, contentType }) =>
      http_post<UploadUrlResponse>('/kitchencalm/s3/upload', {
        fileName,
        contentType,
      }),
    ...options,
  });
};

/**
 * Delete a file from S3
 */
export const useDeleteS3Object = (
  options?: UseMutationOptions<DeleteResponse, Error, string>
) => {
  return useMutation({
    mutationFn: (key: string) =>
      http_post<DeleteResponse>('/kitchencalm/s3/delete', { key }),
    ...options,
  });
};
