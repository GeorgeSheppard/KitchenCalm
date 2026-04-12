import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { CustomSession } from "../../pages/api/auth/[...nextauth]";

export const useAppSession = () => {
  const session = useSession();
  const data = session.data as CustomSession | null;

  useEffect(() => {
    if (data?.error === "RefreshAccessTokenError") {
      signOut();
    }
  }, [data?.error]);

  return {
    id: data?.id,
    accessToken: (data as any)?.accessToken as string | undefined,
    loading: session.status === "loading",
    isAuthenticated: session.status === "authenticated" && !data?.error,
  }
};
