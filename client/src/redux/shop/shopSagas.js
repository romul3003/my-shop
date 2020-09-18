import { takeLatest, call, put, all } from 'redux-saga/effects'

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'

import {
  fetchCollectionSuccess,
  fetchCollectionSuccessFailure,
} from './shopActions'

import ShopActionTypes from './shopTypes'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    // call - calls function convertCollectionsSnapshotToMap with an argument snapshot
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    // saga way of dispatching new actions
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionSuccessFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  // takeLatest catches action
  // takes an action from the regular redux flow
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}