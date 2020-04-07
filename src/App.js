import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
