import { 
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_STATUS,
  USER_LOGOUT,
  UPDATE_LOGIN_STATE,
  USER_LOGIN_ERR
} from 'store/user';
import { AUTHCODE_AWAITINGLOGIN } from 'lib/auth';

const initialState = {
  error: '',
  user: {},
  username: '',
  displayname: '',
  title: '',
  isLoggingIn: false,
  isLoggedIn: false,
  session: {},
  isAuthenticating: true,
  currentState: AUTHCODE_AWAITINGLOGIN
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const { username, isLoggingIn } = action;
      
      return {
        ...state, 
        username, 
        isLoggingIn
      }

    case USER_LOGIN_OK:
      return {...state, user: action.user};

    case USER_LOGIN_STATUS:
      return {...state, isLoggedIn: action.isLoggedIn};

    case UPDATE_SESSION:
      return {...state, session: action.payload};

    case SET_AUTH:
      return {...state, isAuthenticating: action.newStatus}

    case USER_LOGOUT:
      return {...state}

    case UPDATE_LOGIN_STATE:
      return {...state, currentState: action.currentState};

    case USER_LOGIN_ERR:
      return {...state, error: action.error };

    default:
      return {...state};
  }
};