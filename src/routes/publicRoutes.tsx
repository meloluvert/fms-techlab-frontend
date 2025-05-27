// src/routes/publicRoutes.tsx
import { Login } from "../pages/User/Login";
import { Register } from "../pages/User/Register";

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
