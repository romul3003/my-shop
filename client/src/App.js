import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { checkUserSession } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'
import Header from './components/Header/Header'

import { GlobalStyle } from './globalStyles'

import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import CheckoutPage from './pages/Checkout/Checkout'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
