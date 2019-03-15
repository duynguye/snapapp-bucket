import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
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
import { GlobalMenu, LocalMenu, ContextLink } from './components/nav';
import { Login } from './pages';
import { AppState } from './store';
import { UserState } from './store/user/user.types';
import { setAuthState, loginStatus, loginSuccess } from './store/user/user.actions';

/**
 * Mock data
 */
import apps from './lib/mocks/apps';
import localMenuProps from './lib/mocks/context';

interface IAppProps extends AppState {
  setAuthState: typeof setAuthState;
  loginStatus: typeof loginStatus;
  loginSuccess: typeof loginSuccess;
}

interface ContextNode {
  exact: boolean;
  path: string;
  title: string;
  icon: string[];
}

type ContextList = {
  [index: number]: ContextNode;
  map: any;
}

class App extends Component<IAppProps> {
  componentDidMount() {
    this.checkUser();

    console.log(this.props);
  }

  checkUser = () => {
    Auth.currentAuthenticatedUser().then(user => {
      this.props.loginStatus(true);
      this.props.setAuthState(false);
      this.props.loginSuccess(user);
    }).catch(err => {
      this.props.setAuthState(false);
      console.log(err);
    });
  }

  buildContextMenu = (menuItems: ContextList) => {
    return menuItems.map((item: ContextNode, i: number) => 
      <ContextLink exact={item.exact} path={item.path} key={i} icon={item.icon}>{item.title}</ContextLink>
    );
  }

  //<Redirect to={{ pathname: '/login' }} /> :

  render() {
    const { isLoggedIn, isAuthenticating } = this.props.user;
    const contextMenu = this.buildContextMenu(localMenuProps);

    return (
      !isAuthenticating &&

      <DocumentTitle title={'Orca'}>
        <Router>
          <div className='app'>
            { isLoggedIn && 
              <Navigation 
                globalMenu={<GlobalMenu apps={apps} />}
                localMenu={<LocalMenu title='Contests' onClick={() => {}}>{contextMenu}</LocalMenu>}
              />
            }

            <Route path='/login' component={Login} />
            
            <div>
              <PrivateRoute exact path='/contests' authenticated={isLoggedIn} component={TestComponent} />
              <PrivateRoute path='/contests/projects' authenticated={isLoggedIn} component={TestComponent2} />
            </div>
          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

const TestComponent = () => <h1>Component</h1>;
const TestComponent2 = () => <h1>Component - 2</h1>;

const PrivateRoute = ({ component: Component, authenticated = false, ...rest }: any) => (
  <Route {...rest} render={(props) => (
    authenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

const mapStateToProps = ({ user }: { user: UserState }): AppState => ({
  user
});

export default connect(mapStateToProps, { setAuthState, loginStatus, loginSuccess })(App);