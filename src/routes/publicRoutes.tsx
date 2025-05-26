// src/routes/publicRoutes.tsx
import { Login } from "../pages/User/Login";
import { Register } from "../pages/User/Register";

export const publicRoutes = [
  { path: "/entrar", element: <Login /> },
  { path: "/cadastro", element: <Register /> },
];
