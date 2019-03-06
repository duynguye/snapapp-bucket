import { USER_LOGIN, UserActionTypes } from './users.types';

export default (state = [], action: UserActionTypes) => {
  switch (action.type) {
    default:
      return [...state];
  }
};