import { useEffect, useState } from "react";
import { useGetSignedUrl } from "../../client/hooks";
import { Image as S3Image } from "../../core/types/general";

/**
 * Hook to resolve an S3 image key to a signed URL.
 * Returns the signed URL string, or undefined while loading.
 */
export function useRecipeImage(images?: S3Image[]): string | undefined {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const signedUrlMutation = useGetSignedUrl();

  const imageKey = images?.[0]?.key;

  useEffect(() => {
    if (!imageKey) {
      setImageUrl(undefined);
      return;
    }

    let cancelled = false;
    signedUrlMutation
      .mutateAsync(imageKey)
      .then((result: any) => {
        if (!cancelled) {
          // The result may be a string URL or an object with a url property
          const url = typeof result === "string" ? result : result?.signedUrl;
          setImageUrl(url);
        }
      })
      .catch(() => {
        if (!cancelled) setImageUrl(undefined);
      });

    return () => {
      cancelled = true;
    };
    // Only re-run when the image key changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageKey]);

  return imageUrl;
}
