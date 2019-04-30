import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import ReduxThunk from 'redux-thunk';

// Import reducers.
import contestsReducer from 'store/contests/contests.reducers';
import usersReducer from 'store/user/user.reducers';

const rootReducer = combineReducers({
  contests: contestsReducer,
  form: formReducer,
  user: usersReducer
});

export default function initializeStore() {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer, 
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
