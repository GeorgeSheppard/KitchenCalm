import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Key, Check, Loader2 } from "lucide-react";
import { useCreateMcpToken } from "@/client/hooks";

export function CreateMcpTokenButton() {
  const [copied, setCopied] = useState(false);
  const { mutateAsync, isLoading } = useCreateMcpToken();

  const handleClick = async () => {
    try {
      const token = await mutateAsync();
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail - user will notice the button didn't change to "Copied!"
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      disabled={isLoading}
      className="text-muted-foreground"
    >
      {isLoading ? (
        <Loader2 className="size-4 mr-2 animate-spin" />
      ) : copied ? (
        <Check className="size-4 mr-2" />
      ) : (
        <Key className="size-4 mr-2" />
      )}
      {copied ? "Copied!" : "MCP Token"}
    </Button>
  );
}
