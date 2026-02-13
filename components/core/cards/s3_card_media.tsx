import { useState, useEffect } from "react";
import { S3Key } from "../../../core/types/general";
import { CardMedia, Skeleton } from "@mui/material";
import { useGetSignedUrl } from "../../../client/hooks";
import { PostKitchencalmS3SignedUrl200 } from "../../../client/generated/hooks";

export interface IS3CardMediaProps {
  s3Key: S3Key;
  className?: string;
}

/**
 * Takes an s3Key and creates a CardMedia component from it, will refresh
 * when the s3Key changes
 */
export const S3CardMedia = (props: IS3CardMediaProps) => {
  const { s3Key, className } = props;
  const [show, setShow] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [signedUrl, setSignedUrl] = useState<string>();

  // Use wrapper hook that handles mutation
  const { mutateAsync, isLoading, isError } = useGetSignedUrl();

  // Fetch signed URL when key changes
  useEffect(() => {
    if (s3Key) {
      mutateAsync(s3Key).then((response: PostKitchencalmS3SignedUrl200) => {
        setSignedUrl(response.signedUrl);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s3Key]);

  if (isError) {
    return null;
  }

  if (!show) {
    return null;
  }

  return (
    <div style={{ position: "relative", aspectRatio: "1", width: "100%" }}>
      {(isLoading || imageLoading) && (
        <Skeleton variant="rectangular" height="100%" animation="wave" className={className} />
      )}
      <CardMedia
        src={signedUrl}
        component="img"
        onError={() => setShow(false)}
        onLoad={() => setImageLoading(false)}
        className={className}
        sx={{height: imageLoading ? 0 : "100%"}}
      />
    </div>
  );
};
