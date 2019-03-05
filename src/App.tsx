import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Auth } from 'aws-amplify';

/**
 * Imports and setups all of the necessary font awesome icons for the app.
 */
import './components/_global/fontawesome';

/**
 * Imports for custom components and styles if applicable.
 */
import { Navigation } from './layouts';
import { GlobalMenu, LocalMenu } from './components/nav';
import { Login } from './pages';

/**
 * Mock data
 */
import apps from './lib/mocks/apps';

interface IAppState {
  isLoggedIn: boolean
}

class App extends Component<{}, IAppState> {
  state = {
    isLoggedIn: false
  }

  render() {
    const { isLoggedIn }: IAppState = this.state;

    return (
      <DocumentTitle title={'Orca'}>
        <Router>
          <div className='app'>
            <Route exact path='/' render={({ location }) => (
              !isLoggedIn ? (
                <Redirect to={{
                  pathname: '/login',
                  state: { from: location }
                }}/>
              ) : (
                <Navigation 
                  globalMenu={<GlobalMenu apps={apps} />}
                  localMenu={<h1>Local Menu</h1>}
                />
              )
            )} />

            <Route path='/login' component={Login} />
          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

export default App;
