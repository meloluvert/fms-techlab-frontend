// src/routes/AppRouter.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { publicRoutes } from "./publicRoutes";
import { accountRoutes } from "./privateRoutes/accountRoutes";
import { transactionRoutes } from "./privateRoutes/transactionRoutes";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { userRoutes } from "./privateRoutes/userRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <- TUDO deve ficar DENTRO do App (com Outlet)
    children: [
      ...publicRoutes, // login, cadastro
      ...userRoutes.map((route) => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),
      ...accountRoutes.map((route) => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),

      ...transactionRoutes.map((route) => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),
    ],
  },
]);
