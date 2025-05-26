// src/routes/privateRoutes/accountRoutes.tsx
import { Home } from "../../pages/Home";
import { ViewAccount } from "../../pages/Account/ViewAccount";
import { EditAccount } from "../../pages/Account/EditAccount";
import { NewAccount } from "../../pages/Account/NewAccount";
import { contaX } from "../../App";
import { accountsTypes } from "../../pages/Transactions/NewTransaction";
import { testTransactions } from "../../pages/Transactions/TransactionsHistory";
export const accountRoutes = [
  { path: "/", element: <Home /> },
  {
    path: "/conta/editar/:id",
    element: <EditAccount account={contaX} accountTypes={accountsTypes} />,
  },
  {
    path: "/conta/nova/",
    element: <NewAccount accountTypes={accountsTypes} />,
  },
  {
    path: "/conta/:id",
    element: <ViewAccount account={contaX} transactions={testTransactions} />,
  },
];
