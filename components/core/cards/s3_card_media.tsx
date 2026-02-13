import { useState, useEffect } from "react";
import { S3Key } from "../../../core/types/general";
import { CardMedia, Skeleton } from "@mui/material";
import { usePostKitchencalmS3SignedUrl } from "../../../client/generated/hooks";

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

  // Convert query to mutation-based call since the endpoint is POST
  const { mutate: getSignedUrl, isPending, isError, data } = usePostKitchencalmS3SignedUrl();

  // Fetch signed URL when key changes
  useEffect(() => {
    if (s3Key) {
      getSignedUrl({ key: s3Key });
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
      {(isPending || imageLoading) && (
        <Skeleton variant="rectangular" height="100%" animation="wave" className={className} />
      )}
      <CardMedia
        src={data?.signedUrl}
        component="img"
        onError={() => setShow(false)}
        onLoad={() => setImageLoading(false)}
        className={className}
        sx={{height: imageLoading ? 0 : "100%"}}
      />
    </div>
  );
};
