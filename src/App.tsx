import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { TransactionsHistory } from './pages/TransactionsHistory'
function App() {

  return (
    <>
      <Header/>
  <Profile/>
        <Footer page={"home"}/>
        </>
  )
}

export default App
