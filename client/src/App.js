import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import { GlobalStyle } from './globalStyles'

import { checkUserSession } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'

const HomePage = lazy(() => import('./pages/Homepage/Homepage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const SignInAndSignUp = lazy(() =>
  import('./pages/SignInAndSignUp/SignInAndSignUp')
)
const CheckoutPage = lazy(() => import('./pages/Checkout/Checkout'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() => {
                return currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }}
            />
          </Suspense>
        </ErrorBoundary>
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
