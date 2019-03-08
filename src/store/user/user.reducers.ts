import { 
  UserState, 
  UserActionTypes,
  SET_AUTH,
  UPDATE_SESSION,
  USER_LOGIN,
  USER_LOGIN_OK,
  USER_LOGIN_STATUS
} from './user.types';

const initialState: UserState = {
  username: '',
  displayname: '',
  title: '',
  isLoggingIn: false,
  isLoggedIn: false,
  session: {},
  isAuthenticating: true
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      const { username, isLoggingIn } = action;
      console.log(`Setting isLoggingIn: ${action.isLoggingIn}`);
      
      return {
        ...state, 
        username, 
        isLoggingIn
      }

    case USER_LOGIN_OK:
      console.log('Login was a success!');
      return {...state};

    case USER_LOGIN_STATUS:
      return {...state, isLoggedIn: action.isLoggedIn};

    case UPDATE_SESSION:
      return {...state, session: action.payload};

    case SET_AUTH:
      return {...state, isAuthenticating: action.newStatus}

    default:
      return {...state};
  }
};