import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  signUpRequest: ['name', 'email', 'password'],
  deleteSessionRequest: ['authentication_token'],
  authSuccess: ['authentication_token', 'email', 'name'],
  deleteSessionSuccess: null,
  authFailure: null
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  password: null,
  name: null,
  authentication_token: null,
  fetching: null,
  error: null,
  isSigned: false
});

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  loading: state => state.fetching,
  email: state => state.email,
  name: state => state.name,
  authentication_token: state => state.authentication_token,
  password: state => state.password
};

/* ------------- Reducers ------------- */

// request the data from an api
export const authRequest = (state, { email, password }) =>
  state.merge({
    fetching: true,
    email,
    password,
    authentication_token: null,
    name: null,
    isSigned: false
  });

export const signUpRequest = (state, { email, password, name }) =>
  state.merge({
    fetching: true,
    email,
    password,
    name,
    authentication_token: null,
    isSigned: false
  });
export const deleteSessionRequest = (state, { authentication_token }) =>
  state.merge({
    fetching: true,
    email: null,
    password: null,
    authentication_token,
    name: null
  });

// successful api lookup
export const success = (state, action) => {
  const { authentication_token, name, email } = action;
  return state.merge({
    fetching: false,
    error: null,
    authentication_token,
    name,
    email,
    isSigned: true,
    password: null
  });
};

export const deleteSessionSuccess = state =>
  state.merge({ fetching: false, isSigned: false, authentication_token: null });

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.DELETE_SESSION_REQUEST]: deleteSessionRequest,
  [Types.DELETE_SESSION_SUCCESS]: deleteSessionSuccess,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
});
