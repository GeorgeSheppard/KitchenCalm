import { Image as S3Image } from "../../core/types/general";

/**
 * Hook to get the image URL from a recipe's images.
 * Now uses the presignedUrl returned directly from the recipes endpoint.
 */
export function useRecipeImage(images?: S3Image[]): string | undefined {
  return images?.[0]?.presignedUrl;
}
