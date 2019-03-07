import { Action } from 'redux';

import { authenticate, currentSession, AuthCode, AuthResponse } from '../../lib/auth';
import {
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_ERR,
  UserSession,
  UserSessionDispatch,
  UserLoginDispatch,
  User,
  UserActionTypes
} from './user.types';

export function setAuthState(newStatus: boolean) {
  return {
    type: SET_AUTH,
    newStatus
  };
}

export const setSession = (session: UserSession) => ({
  type: UPDATE_SESSION,
  payload: session
})

export const updateSession = () => async (dispatch: UserSessionDispatch) => {
  const payload = await currentSession(); 

  if (payload.status === AuthCode.Success) {
    dispatch(setSession(payload.session));
  }
}

/**
 * Action creator for logging the user in.
 */
export const loginRequest = (username: string) => ({
  type: USER_LOGIN,
  username
});

export const loginSuccess = (user: User) => ({
  type: USER_LOGIN_OK,
  user
});

export const loginError = (error: string) => ({
  type: USER_LOGIN_ERR,
  error
});

export const login = (username: string, password: string) => {
  return async (dispatch: UserLoginDispatch) => {
    dispatch(loginRequest(username));

    const response = await authenticate(username, password);

    if (response.status === AuthCode.Success) {
      console.log('Successfully logged in: ', response.user);
      dispatch(loginSuccess(response.user));
    } else {
      console.log('Unable to login');
    }
  }
}