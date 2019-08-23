import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { AuthTypes } from '../Redux/AuthRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { postSession } from './AuthSagas';
import { postUser } from './AuthSagas';
import { deleteSession } from './AuthSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(AuthTypes.AUTH_REQUEST, postSession, api),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, postUser, api),
    takeLatest(AuthTypes.DELETE_SESSION_REQUEST, deleteSession, api)
  ]);
}
