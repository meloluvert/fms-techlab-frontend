// src/routes/privateRoutes/accountRoutes.tsx
import { AccountTypes } from "../../pages/AccountType/ViewAccountTypes";
import { EditAccountType } from "../../pages/AccountType/EditAccountType";
import { NewAccountType } from "../../pages/AccountType/NewAccountType";
export const accountTypesRoutes = [
  {
    path: "/account-types/",
    element: <AccountTypes />,
  },
  {
    path: "/account-types/edit/:id",
    element: <EditAccountType/>,
  },
  {
    path: "/account-types/new/",
    element: <NewAccountType/>,
  },
];
