import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/Header/Header'
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'
import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
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
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
