import { takeLatest, call, put } from 'redux-saga/effects'

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
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionSuccessFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
