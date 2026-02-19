import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

type CompatImageProps = Omit<NextImageProps, "layout" | "objectFit"> & {
  fill?: boolean;
};

/**
 * Compatibility shim for Next.js 12 Image component.
 * Translates the `fill` boolean prop (Next 13+) to `layout="fill"` + `objectFit="cover"` (Next 12).
 */
const CompatImage = React.forwardRef<HTMLImageElement, CompatImageProps>(
  ({ fill, ...props }, ref) => {
    if (fill) {
      // @ts-ignore - Next 12 uses layout prop instead of fill
      return <NextImage {...props} layout="fill" objectFit="cover" ref={ref} />;
    }
    // @ts-ignore - Next 12 image props differ slightly
    return <NextImage {...props} ref={ref} />;
  }
);

CompatImage.displayName = "CompatImage";

export default CompatImage;
