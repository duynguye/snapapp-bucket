import { Auth } from 'aws-amplify';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

/**
 * Global enum for understand the results of authentication codes. Must be imported alongside the
 * function calls so that it can be translated.
 */
export enum AuthCode {
  Success               = 'SUCCESS',
  UndefinedError        = 'UNDEFINED',
  NewPasswordRequired   = 'NEW_PASSWORD_REQUIRED',
  UserNotFound          = 'USER_NOT_FOUND',
  InvalidPassword       = 'INVALID_PASSWORD',
  UserNotComfirmed      = 'USER_NOT_CONFIRMED',
  ResetRequired         = 'PASSWORD_RESET_REQUIRED',
}

export interface AuthResponse {
  status: AuthCode;
  user?: {} | undefined;
  session?: CognitoUserSession | {} | undefined;
}

/**
 * Authenicates a user account and will return an AuthResponse based on the results. 
 * Results will always be consistent and will return a user object as a payload if successful.
 * 
 * @param username The username of the user logging in.
 * @param password The password of the username. Required Field.
 */
export async function authenticate(username: string, password: string): Promise<AuthResponse> {
  try {
    const user = await Auth.signIn(username, password);
    let status: AuthCode = AuthCode.Success;
    
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      status = AuthCode.NewPasswordRequired;
    }

    return {
      status,
      user
    };
  } catch (err) {
    let status: AuthCode = AuthCode.UndefinedError;

    switch (err.code) {
      case 'UserNotFoundException':
        status = AuthCode.UserNotFound;
        break;

      case 'NotAuthorizedException':
        status = AuthCode.InvalidPassword;
        break;

      case 'UserNotConfirmedException':
        status = AuthCode.UserNotComfirmed;
        break;

      case 'PasswordResetRequiredException':
        status = AuthCode.ResetRequired;
    }

    return {
      status,
      user: undefined
    }
  }
}

/**
 * Setup new password.
 */
export async function setNewPassword(user: {}, password: string): Promise<{}> {
  try {
    const session = await Auth.completeNewPassword(user, password, {});
    let status: AuthCode = AuthCode.Success;
    
    return {
      status,
      session
    };
  } catch (err) {
    return err;
  }
}

/**
 * Get current active session.
 */
export async function currentSession(): Promise<AuthResponse> {
  try {
    const session = await Auth.currentSession();
    let status: AuthCode = AuthCode.Success;
  
    return {
      status,
      session
    };
  } catch (err) {
    return err;
  }
}

/**
 * Get the current authenticated user if it exists.
 */
export async function currentAuthUser(): Promise<AuthResponse> {
  try {
    const user = await Auth.currentAuthenticatedUser();
    let status: AuthCode = AuthCode.Success;

    return {
      status,
      user
    };
  } catch (err) {
    return err;
  }
}
