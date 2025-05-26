import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import type { JSX } from "react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, user, loading } = useAuth();
  if (loading) return <div>Carregando...</div>; // ou um spinner bonitinho
  if (!token || !user) return <Navigate to="/entrar" replace />;
  return children; 
};
