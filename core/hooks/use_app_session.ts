import { useSession } from "next-auth/react";
import { CustomSession } from "../../pages/api/auth/[...nextauth]";

export const useAppSession = () => {
  const session = useSession();
  return {
    id: (session.data as CustomSession)?.id,
    accessToken: (session.data as any)?.accessToken as string | undefined,
    loading: session.status === "loading"
  }
};
