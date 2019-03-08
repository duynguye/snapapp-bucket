import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';

export const SET_AUTH           = 'SET_AUTH';
export const USER_LOGIN         = 'USER_LOGIN';
export const USER_LOGIN_OK      = 'USER_LOGIN_OK';
export const USER_LOGIN_ERR     = 'USER_LOGIN_ERR';
export const USER_LOGIN_STATUS  = 'USER_LOGIN_STATUS';
export const USER_LOGOUT        = 'USER_LOGOUT';
export const UPDATE_SESSION     = 'UPDATE_SESSION';

export type User = CognitoUser | {} | undefined;
export type UserSession = CognitoUserSession | {} | undefined;
export type UserSessionDispatch = ThunkDispatch<UserState, UserActionTypes, Action>;
export type UserLoginDispatch = ThunkDispatch<UserState, null, Action>;

export interface UserState {
  username: string | undefined;
  displayname: string | undefined;
  title: string | undefined;
  isLoggingIn: boolean | undefined;
  isLoggedIn: boolean | undefined;
  session: UserSession;
}

interface UserLoginAction {
  type: typeof USER_LOGIN | typeof USER_LOGIN_OK | typeof USER_LOGIN_ERR | typeof USER_LOGIN_STATUS;
  username?: string;
  user?: User | undefined;
  error?: string;
  isLoggingIn?: boolean | undefined;
  isLoggedIn?: boolean | undefined;
}

interface UserUpdateSession {
  type: typeof UPDATE_SESSION;
  payload: UserSession;
}

export type UserActionTypes = UserLoginAction | UserUpdateSession;