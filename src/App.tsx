import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { withAuthenticator, SignIn } from 'aws-amplify-react';

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
import { AppState } from './store';
import { currentSession } from './lib/auth';

/**
 * Mock data
 */
import apps from './lib/mocks/apps';

class App extends Component<AppState> {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    Auth.currentAuthenticatedUser().then(user => {
      this.setState({
        loggedIn: true
      });
    })
  }

  render() {
    const { isLoggedIn } = this.props.user;
    const { loggedIn } = this.state;

    if (loggedIn) {
      return (
        <DocumentTitle title={'Orca'}>
          <Router>
            <div className='app'>
              <Route exact path='/' render={({ location }) => (
                  <Navigation 
                    globalMenu={<GlobalMenu apps={apps} />}
                    localMenu={<h1>Local Menu</h1>}
                  />
              )} />
  
              <Route path='/login' component={Login} />
            </div>
          </Router>
        </DocumentTitle>
      );
    }

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

const mapStateToProps = ({ user }: { user: any }): any => ({
  user
});

export default connect(mapStateToProps, null)(App);
