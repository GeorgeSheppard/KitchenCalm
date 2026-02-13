import { useState, useEffect } from "react";
import { S3Key } from "../../../core/types/general";
import { CardMedia, Skeleton } from "@mui/material";
import { useGetSignedUrl } from "../../../client/hooks";

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

  // Use wrapper hook that handles mutation
  const { mutateAsync, isLoading, isError, data } = useGetSignedUrl();

  // Fetch signed URL when key changes
  useEffect(() => {
    if (s3Key) {
      mutateAsync(s3Key);
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
        src={(data as any)?.signedUrl}
        component="img"
        onError={() => setShow(false)}
        onLoad={() => setImageLoading(false)}
        className={className}
        sx={{height: imageLoading ? 0 : "100%"}}
      />
    </div>
  );
};
