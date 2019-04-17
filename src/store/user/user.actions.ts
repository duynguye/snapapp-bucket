import { History } from 'history';

import { authenticate, signout, currentSession, AuthCode, setNewPassword, AuthResponse } from '../../lib/auth';
import {
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_ERR,
  USER_LOGIN_STATUS,
  UPDATE_LOGIN_STATE,
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
});

export const loginState = (currentState: AuthCode) => ({
  type: UPDATE_LOGIN_STATE,
  currentState
});

export const login = (username: string, password: string, history: History, path: string) => {
  return async (dispatch: UserLoginDispatch) => {
    dispatch(loginRequest(username, true));

    const response = await authenticate(username, password);

    if (response.status === AuthCode.Success) {
      dispatch(loginSuccess(response.user));
      dispatch(loginRequest(username, false));
      dispatch(loginStatus(true));

      history.push(path);
    } if (response.status === AuthCode.NewPasswordRequired) {
      dispatch(loginRequest(username, false));
      dispatch(loginSuccess(response.user));
      dispatch(loginState(AuthCode.NewPasswordRequired));
    } else {
      dispatch(loginError(response.status));
    }
  }
}

export const setRequiredPassword = (user: User, password: string, history: History) => {
  return async (dispatch: UserLoginDispatch) => {
    const response = await setNewPassword(user, password);

    if (response.status === AuthCode.Success) {
      dispatch(loginStatus(true));
      dispatch(loginSuccess(response.user));
      history.push('/');
    }
  }
}

export const logout = (history: History) => {
  return async (dispatch: UserLoginDispatch) => {
      const response = await signout();

      if (response.status === AuthCode.LogoutSucess) {
        dispatch(loginStatus(false));
        history.push('/', { from: '/' });
      }
  }
}
