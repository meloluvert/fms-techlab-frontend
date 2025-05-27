
import type { JSX } from "react";
// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, user, loading } = useAuth();
  console.log("ProtectedRoute:", { token, user, loading });


  // Enquanto está carregando, não renderiza nem redireciona!
  if (loading) return <div>Carregando...</div>;

  if (!token || !user) return <Navigate to="/entrar" />;
  return children;
};
