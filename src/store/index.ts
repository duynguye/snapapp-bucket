import { createStore, combineReducers } from 'redux';

// Import reducers.
import usersReducer from './users/users.reducers';

const rootReducer = combineReducers({
  users: usersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function initializeStore() {
  const store = createStore(rootReducer);

  return store;
}
