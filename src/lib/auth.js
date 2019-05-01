import { Auth } from 'aws-amplify';

/**
 * Global enum for understand the results of authentication codes. Must be imported alongside the
 * function calls so that it can be translated.
 */
export const AUTHCODE_SUCCESS           = 'SUCCESS';
export const AUTHCODE_LOGOUTSUCCESS     = 'LOGOUT_SUCCESS';
export const AUTHCODE_UNDEFINED         = 'UNDEFINED';
export const AUTHCODE_NEWPASSWORD       = 'NEW_PASSWORD_REQUIRED';
export const AUTHCODE_USERNOTFOUND      = 'USER_NOT_FOUND';
export const AUTHCODE_INAVLIDPASSWORD   = 'INVALID_PASSWORD';
export const AUTHCODE_USERNOTCONFIRMED  = 'USER_NOT_CONFIRMED';
export const AUTHCODE_RESETREQUIRED     = 'PASSWORD_RESET_REQUIRED';
export const AUTHCODE_AWAITINGLOGIN     = 'AWAITING_LOGIN';

/**
 * Authenicates a user account and will return an AuthResponse based on the results. 
 * Results will always be consistent and will return a user object as a payload if successful.
 * 
 * @param username The username of the user logging in.
 * @param password The password of the username. Required Field.
 */
export async function authenticate(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    let status = AUTHCODE_SUCCESS;
    
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      status = AUTHCODE_NEWPASSWORD;
    }

    return {
      status,
      user
    };
  } catch (err) {
    let status = AUTHCODE_UNDEFINED;

    switch (err.code) {
      case 'UserNotFoundException':
        status = AUTHCODE_USERNOTFOUND;
        break;

      case 'NotAuthorizedException':
        status = AUTHCODE_INAVLIDPASSWORD;
        break;

      case 'UserNotConfirmedException':
        status = AUTHCODE_USERNOTCONFIRMED;
        break;

      case 'PasswordResetRequiredException':
        status = AUTHCODE_RESETREQUIRED;
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
export async function setNewPassword(user, password) {
  try {
    const session = await Auth.completeNewPassword(user, password, {});
    console.log(session);
    let status = AUTHCODE_SUCCESS;
    
    return {
      status,
      session
    };
  } catch (err) {
    console.log(err);
    return err;
  }
}

/**
 * Get current active session.
 */
export async function currentSession() {
  try {
    const session = await Auth.currentSession();
    let status = AUTHCODE_SUCCESS;
  
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
export async function currentAuthUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    let status = AUTHCODE_SUCCESS;

    return {
      status,
      user
    };
  } catch (err) {
    return err;
  }
}

/**
 * Log the current auth user out.
 */
export async function signout() {
  try {
    const result = await Auth.signOut({ global: true });
    let status = AUTHCODE_LOGOUTSUCCESS;

    console.log(result);

    return {
      status
    }
  } catch (err) {
    return err;
  }
}