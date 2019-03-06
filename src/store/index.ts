import { combineReducers } from 'redux';
import usersReducer from './users/users.reducers';

export default combineReducers({
  users: usersReducer
});
