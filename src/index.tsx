import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';

// Custom styles and imports
import './index.scss';
import awsmobile from './aws-exports';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initializeStore from './store';

// Setup AWS Amplify authentication.
Amplify.configure(awsmobile);

// Setup the store and add a provider.
const store = initializeStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
