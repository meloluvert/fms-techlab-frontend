import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/User/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/User/Register";
import { ViewAccount } from "./pages/Account/ViewAccount";
import { contaX } from "./App";
import { testTransactions } from "./pages/Transactions/TransactionsHistory";
import { accountsTypes, NewTransaction } from "./pages/Transactions/NewTransaction";
import { accounts } from "./pages/Transactions/NewTransaction";
import { EditAccount } from "./pages/Account/EditAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/entrar", element: <Login /> },
      { path: "/cadastro", element: <Register /> },
      { path: "/conta/editar/:id", element: <EditAccount account={contaX} accountTypes={accountsTypes}/> },
      { path: "/conta/:id", element: <ViewAccount account={contaX} transactions={testTransactions}/> },
      { path: "/transferir/:id", element: <NewTransaction fixedAccount={contaX} accounts={accounts}/> },
      { path: "/transferir/", element: <NewTransaction accounts={accounts}/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
