import { 
  UserState, 
  UserActionTypes,
  UPDATE_SESSION
} from './user.types';

const initialState: UserState = {
  username: '',
  displayname: '',
  title: '',
  isLoggingIn: false,
  isLoggedIn: false,
  session: {}
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_SESSION:
      return {...state, session: action.payload};

    default:
      return {...state};
  }
};