import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';

// Custom styles and imports
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';
import '_global/index.scss';
import awsmobile from './aws-exports';
import App from './App';
import initializeStore from 'store';

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
