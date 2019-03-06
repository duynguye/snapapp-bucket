import { 
  UserState, 
  UserActionTypes 
} from './users.types';

const initialState: UserState = {
  username: undefined,
  displayname: undefined,
  title: undefined,
  isLoggingIn: false,
  isLoggedIn: false
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    default:
      return {...state};
  }
};