
import type { JSX } from "react";
// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../Loading";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, user, loading } = useAuth();
  if (loading) return <Loading/>;
  if (!token || !user) return <Navigate to="/login" />;
  return children;
};
