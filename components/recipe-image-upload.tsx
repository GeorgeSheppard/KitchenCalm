import { useState, useRef, useCallback } from "react";
import { ImagePlus, X, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { S3Key } from "@/core/types/general";
import useUploadToS3 from "@/core/s3/hooks/upload_to_s3";

interface RecipeImageUploadProps {
  initialImageUrl?: string;
  onImageUploaded: (key: S3Key) => void;
  onImageRemoved: () => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function RecipeImageUpload({
  initialImageUrl,
  onImageUploaded,
  onImageRemoved,
}: RecipeImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(
    initialImageUrl
  );
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const { uploadFile } = useUploadToS3({
    onStartUpload: () => {
      setUploading(true);
      setError(undefined);
    },
    onUploadFinished: ({ key }) => {
      setUploading(false);
      onImageUploaded(key);
    },
    onUploadError: ({ error }) => {
      setUploading(false);
      setError("Upload failed. Please try again.");
      setPreviewUrl(undefined);
    },
  });

  const handleFile = useCallback(
    (file: File) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError("Please upload a JPEG, PNG, or WebP image.");
        return;
      }
      setError(undefined);
      setPreviewUrl(URL.createObjectURL(file));
      uploadFile(file);
    },
    [uploadFile]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      if (inputRef.current) inputRef.current.value = "";
    },
    [handleFile]
  );

  const handleRemove = useCallback(() => {
    setPreviewUrl(undefined);
    setError(undefined);
    onImageRemoved();
  }, [onImageRemoved]);

  if (previewUrl) {
    return (
      <div className="relative group">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt="Recipe"
            className="size-full object-cover"
          />
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/60">
              <Loader2 className="size-6 animate-spin text-primary" />
            </div>
          )}
        </div>
        {!uploading && (
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="size-8 shadow-sm"
              onClick={() => inputRef.current?.click()}
            >
              <ImagePlus className="size-4" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="size-8 shadow-sm"
              onClick={handleRemove}
            >
              <X className="size-4" />
            </Button>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES.join(",")}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>
    );
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 cursor-pointer transition-colors ${
          dragOver
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <Upload className="size-6 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">
            Drop an image here or click to upload
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            JPEG, PNG, or WebP
          </p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="hidden"
        onChange={handleInputChange}
      />
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}
