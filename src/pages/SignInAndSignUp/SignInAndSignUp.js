import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles'

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
)

export default SignInAndSignUp
