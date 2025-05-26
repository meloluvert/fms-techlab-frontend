// src/routes/privateRoutes/transactionRoutes.tsx
import { NewTransaction } from "../../pages/Transactions/NewTransaction";
import { TransactionsHistory } from "../../pages/Transactions/TransactionsHistory";
import { contaX } from "../../App";
import { accounts } from "../../pages/Transactions/NewTransaction";
import { testTransactions } from "../../pages/Transactions/TransactionsHistory";

export const transactionRoutes = [
  {
    path: "/transferir/:id",
    element: <NewTransaction fixedAccount={contaX} accounts={accounts} />,
  },
  {
    path: "/transferir/",
    element: <NewTransaction accounts={accounts} />,
  },
  {
    path: "/transferencias/",
    element: <TransactionsHistory transactions={testTransactions} />,
  },
];
