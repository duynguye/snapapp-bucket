import { History } from 'history';

import { authenticate, currentSession, AuthCode, AuthResponse } from '../../lib/auth';
import {
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_ERR,
  USER_LOGIN_STATUS,
  UserSession,
  UserSessionDispatch,
  UserLoginDispatch,
  User
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
export const loginRequest = (username: string, isLoggingIn: boolean) => ({
  type: USER_LOGIN,
  username,
  isLoggingIn
});

export const loginSuccess = (user: User) => ({
  type: USER_LOGIN_OK,
  user
});

export const loginError = (error: string) => ({
  type: USER_LOGIN_ERR,
  error
});

export const loginStatus = (isLoggedIn: boolean) => ({
  type: USER_LOGIN_STATUS,
  isLoggedIn
})

export const login = (username: string, password: string, history: History) => {
  return async (dispatch: UserLoginDispatch) => {
    dispatch(loginRequest(username, true));

    const response = await authenticate(username, password);

    if (response.status === AuthCode.Success) {
      dispatch(loginSuccess(response.user));
      dispatch(loginRequest(username, false));
      dispatch(loginStatus(true));
      history.push('/');
    } else {
      dispatch(loginError(response.status));
    }
  }
}