import { Auth } from 'aws-amplify';

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

interface AuthResponse {
  status: AuthCode;
  user?: {};
}

/**
 * Authenicates a user account and will return an AuthResponse based on the results. 
 * Results will always be consistent and will return a user object as a payload if successful.
 * 
 * @param username string
 * @param password string
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
      status
    }
  }
}

/**
 * Setup new password.
 */
export async function setNewPassword(user: {}, password: string): Promise<{}> {
  try {
    const results = await Auth.completeNewPassword(user, password, {});
    
    return results;
  } catch (err) {
    return err;
  }
}

/**
 * Get current active session.
 */
export async function currentSession(): Promise<{}> {
  try {
    const result = await Auth.currentSession();
  
    return result;
  } catch (err) {
    return err;
  }
}
