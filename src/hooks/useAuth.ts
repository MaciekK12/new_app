import { useSession, signIn, signOut } from "next-auth/react";

const useAuth = () => {
  const { data: session, status } = useSession();

  const login = () => signIn(); // Możesz tutaj określić dostawcę
  const logout = () => signOut();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  return { session, login, logout, isLoading, isAuthenticated };
};

export default useAuth;
