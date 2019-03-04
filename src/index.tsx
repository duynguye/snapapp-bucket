import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';

// Custom styles and imports
import './index.scss';
import awsmobile from './aws-exports';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Setup AWS Amplify authentication.
Amplify.configure(awsmobile);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
