import { useAuth } from "../../src/auth/AuthProvider";

export const useAppSession = () => {
  const { user, isLoading, isAuthenticated } = useAuth();

  return {
    id: user?.id,
    loading: isLoading,
    isAuthenticated,
  };
};
