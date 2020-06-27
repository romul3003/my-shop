import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from '../user/userTypes'
import { clearCart } from './cartActions'

export function* clearCartOnSignOUt() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOUt)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
