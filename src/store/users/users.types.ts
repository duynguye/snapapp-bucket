export const LOGIN_REQUEST  = 'LOGIN_REQUEST';
export const SET_AUTH       = 'SET_AUTH';
export const USER_LOGIN     = 'USER_LOGIN';
export const USER_LOGOUT    = 'USER_LOGOUT';

export interface UserState {
  username: string | undefined;
  displayname: string | undefined;
  title: string | undefined;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
}

interface UserLoginAction {
  type: typeof USER_LOGIN;
  payload: [];
}

export type UserActionTypes = UserLoginAction;