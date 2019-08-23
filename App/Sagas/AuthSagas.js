/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from 'redux-saga/effects';
import AuthActions from '../Redux/AuthRedux';
// import { AuthSelectors } from '../Redux/AuthRedux'

export function* postSession(api, action) {
  const { email, password } = action;
  // get current data from Store
  // const currentData = yield select(AuthSelectors.getData)
  // make the call to the api
  const response = yield call(api.postSession, email, password);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    const { authentication_token, name, email } = response.data;
    yield put(AuthActions.authSuccess(authentication_token, email, name));
  } else {
    yield put(AuthActions.authFailure());
  }
}

export function* postUser(api, action) {
  const { email, password, name } = action;
  // get current data from Store
  // const currentData = yield select(AuthSelectors.getData)
  // make the call to the api
  const response = yield call(api.postUser, name, email, password);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    const { authentication_token, name, email } = response.data;
    yield put(AuthActions.authSuccess(authentication_token, email, name));
  } else {
    yield put(AuthActions.authFailure());
  }
}

export function* deleteSession(api, action) {
  const { authentication_token } = action;
  console.tron.log(action);
  // get current data from Store
  // const currentData = yield select(AuthSelectors.getData)
  // make the call to the api
  const response = yield call(api.deleteSession, authentication_token);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(AuthActions.deleteSessionSuccess());
  } else {
    yield put(AuthActions.authFailure());
  }
}
