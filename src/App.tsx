import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { TransactionsHistory } from './pages/Transactions/TransactionsHistory'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NewTransaction } from './pages/Transactions/NewTransaction'
import { ViewAccount } from './pages/Account/ViewAccount'
import { NewAccount } from './pages/Account/NewAccount'
import { testTransactions } from './pages/Transactions/TransactionsHistory'
import type { IAccount } from './components/FormInput'

export const contaX: IAccount = {
  id: "1",
  name: "Conta X",
  balance: "3076.12",
  type: "corrente",
  updated_at: "2025-05-22 10:30",
  created_at: "2025-01-10 14:00",
  description: "Conta principal usada para pagamentos mensais Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a laudantium praesentium nemo incidunt, ipsam hic animi dolorum, esse aut autem! Excepturi dolores, autem praesentium deleniti voluptas odit quo mollitia!", 
  color: "#345AF1", // Azul padrão
};

function App() {

  return (
    <>
      <Header />
      <div className="flex items-center pt-3 pb-25 justify-center">
      <ViewAccount account={contaX} transactions={testTransactions}/>
      </div>
      <Footer page={"home"} />
    </>
  )
}

export default App
