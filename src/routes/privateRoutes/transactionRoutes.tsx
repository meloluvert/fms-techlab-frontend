// src/routes/privateRoutes/transactionRoutes.tsx
import { NewTransaction } from "../../pages/Transactions/NewTransaction";
import { TransactionsHistory } from "../../pages/Transactions/TransactionsHistory";

export const transactionRoutes = [
  {
    path: "/transfer/:id",
    element: <NewTransaction  />,
  },
  {
    path: "/transfer/",
    element: <NewTransaction />,
  },
  {
    path: "/transactions/",
    element: <TransactionsHistory/>,
  },
];
