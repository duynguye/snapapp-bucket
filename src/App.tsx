import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

/**
 * Imports and setups all of the necessary font awesome icons for the app.
 */
import './components/_global/fontawesome';

/**
 * Imports for custom components and styles if applicable.
 */
import { Navigation } from './layouts';
import { GlobalMenu } from './components';

/**
 * Mock data
 */
import apps from './lib/mocks/apps';

interface IAppProps {

}

interface IAppState {

}

const TestMenu = ({ children }: any) => (
  <div>
    {children}
  </div>
)

/**
 * Imports and setups all of the necessary font awesome icons for the app.
 */
class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <Router>
        <div>
          <Navigation 
            globalMenu={<GlobalMenu apps={apps} />}
            localMenu={<h1>Local Menu</h1>}
          />

        </div>
      </Router>
    );
  }
}

export default App;
