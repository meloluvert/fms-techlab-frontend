import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { TransactionsHistory } from './pages/TransactionsHistory'
function App() {

  return (
    <>
      <Header/>
  <TransactionsHistory/>
        <Footer page={"home"}/>
        </>
  )
}

export default App
