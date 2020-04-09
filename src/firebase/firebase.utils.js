import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBSYHd40JX1iqOiHcYfm6I8UH0MQjSUkAg',
  authDomain: 'my-shop-db-46a2d.firebaseapp.com',
  databaseURL: 'https://my-shop-db-46a2d.firebaseio.com',
  projectId: 'my-shop-db-46a2d',
  storageBucket: 'my-shop-db-46a2d.appspot.com',
  messagingSenderId: '353645667012',
  appId: '1:353645667012:web:2ca36490164af774b65f91',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
