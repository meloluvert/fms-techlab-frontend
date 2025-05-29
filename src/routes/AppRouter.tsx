import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { publicRoutes } from "./publicRoutes";
import { accountRoutes } from "./privateRoutes/accountRoutes";
import { transactionRoutes } from "./privateRoutes/transactionRoutes";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { userRoutes } from "./privateRoutes/userRoutes";
import { accountTypesRoutes } from "./privateRoutes/accountTypeRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      ...publicRoutes, 
      ...accountTypesRoutes.map((route) => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),
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
