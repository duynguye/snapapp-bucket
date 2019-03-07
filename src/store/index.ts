import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// Import reducers.
import usersReducer from './user/user.reducers';

const rootReducer = combineReducers({
  user: usersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function initializeStore() {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer, 
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
