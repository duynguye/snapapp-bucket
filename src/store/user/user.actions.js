import { authenticate, signout, currentSession, AuthCode, setNewPassword } from 'lib/auth';
import {
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_ERR,
  USER_LOGIN_STATUS,
  UPDATE_LOGIN_STATE,
} from 'store/user';

export function setAuthState(newStatus) {
  return {
    type: SET_AUTH,
    newStatus
  };
}

export const setSession = (session) => ({
  type: UPDATE_SESSION,
  payload: session
})

export const updateSession = () => async (dispatch) => {
  const payload = await currentSession(); 

  if (payload.status === AuthCode.Success) {
    dispatch(setSession(payload.session));
  }
}

/**
 * Action creator for logging the user in.
 */
export const loginRequest = (username, isLoggingIn) => ({
  type: USER_LOGIN,
  username,
  isLoggingIn
});

export const loginSuccess = (user) => ({
  type: USER_LOGIN_OK,
  user
});

export const loginError = (error) => ({
  type: USER_LOGIN_ERR,
  error
});

export const loginStatus = (isLoggedIn) => ({
  type: USER_LOGIN_STATUS,
  isLoggedIn
});

export const loginState = (currentState) => ({
  type: UPDATE_LOGIN_STATE,
  currentState
});

export const login = (username, password, history, path) => {
  return async (dispatch) => {
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

export const setRequiredPassword = (user, password, history) => {
  return async (dispatch) => {
    const response = await setNewPassword(user, password);

    if (response.status === AuthCode.Success) {
      dispatch(loginStatus(true));
      dispatch(loginSuccess(response.user));
      history.push('/');
    }
  }
}

export const logout = (history) => {
  return async (dispatch) => {
      const response = await signout();

      if (response.status === AuthCode.LogoutSucess) {
        dispatch(loginStatus(false));
        history.push('/', { from: '/' });
      }
  }
}
