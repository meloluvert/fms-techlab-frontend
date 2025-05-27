// src/routes/privateRoutes/accountRoutes.tsx
import { Home } from "../../pages/Home";
import { ViewAccount } from "../../pages/Account/ViewAccount";
import { EditAccount } from "../../pages/Account/EditAccount";
import { NewAccount } from "../../pages/Account/NewAccount";
export const accountRoutes = [
  { path: "/", element: <Home /> },
  {
    path: "/account/edit/:id",
    element: <EditAccount />,
  },
  {
    path: "/account/new/",
    element: <NewAccount/>,
  },
  {
    path: "/account/:id",
    element: <ViewAccount/>,
  },
];
