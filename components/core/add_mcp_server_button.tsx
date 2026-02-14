import { Button, CircularProgress, Snackbar } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { postMcpAuthToken } from "../../client/generated/hooks";

const MCP_SERVER_URL = "https://api.georgesheppard.dev/mcp";

export default function AddMcpServerButton() {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  if (session.status !== "authenticated") {
    return null;
  }

  const accessToken = (session.data as any)?.accessToken as
    | string
    | undefined;

  const handleClick = async () => {
    if (!accessToken) {
      setSnackbarMessage("No access token available. Try logging in again.");
      return;
    }

    setLoading(true);
    try {
      const response = await postMcpAuthToken({
        headers: { authorization: `Bearer ${accessToken}` },
      });

      const mcpToken = response.data.token;

      const mcpConfig = {
        mcpServers: {
          kitchencalm: {
            url: MCP_SERVER_URL,
            headers: {
              Authorization: `Bearer ${mcpToken}`,
            },
          },
        },
      };

      await navigator.clipboard.writeText(JSON.stringify(mcpConfig, null, 2));
      setSnackbarMessage(
        "MCP server config copied to clipboard! Paste it into your Claude Code settings."
      );
    } catch {
      setSnackbarMessage("Failed to generate MCP token. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex place-content-center px-8">
        <div className="max-w-6xl w-full">
          <Button
            variant="outlined"
            fullWidth
            onClick={handleClick}
            disabled={loading}
            sx={{
              textTransform: "none",
              borderColor: "#207d39",
              color: "#207d39",
              "&:hover": {
                borderColor: "#185f2b",
                backgroundColor: "rgba(32, 125, 57, 0.04)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
            ) : null}
            Add MCP Server to Claude Code
          </Button>
        </div>
      </div>
      <Snackbar
        open={snackbarMessage !== null}
        autoHideDuration={5000}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage}
      />
    </>
  );
}
