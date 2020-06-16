import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { checkUserSession } from './redux/user/userActions'
import Header from './components/Header/Header'
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import CheckoutPage from './pages/Checkout/Checkout'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { selectCurrentUser } from './redux/user/userSelectors'
import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp />
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
