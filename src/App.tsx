import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { 
  GlobalMenu, 
  LocalMenu, 
  ContextLink, 
  ContextList, 
  ContextNode ,
  Header
} from './components/nav';
import { Login, Contests } from './pages';
import { AppState } from './store';
import { UserState } from './store/user/user.types';
import { setAuthState, loginStatus, loginSuccess } from './store/user/user.actions';

/**
 * Mock data
 */
import apps from './lib/mocks/apps';
import localMenuProps from './lib/mocks/context';

/**
 * Global app props
 */
interface IAppProps extends AppState {
  setAuthState: typeof setAuthState;
  loginStatus: typeof loginStatus;
  loginSuccess: typeof loginSuccess;
}

class App extends Component<IAppProps> {
  componentDidMount() {
    this.checkUser();
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

            <Route exact path='/' render={props => <Redirect to={{ pathname: '/contests' }} />} />
            <Route path='/login' component={Login} />

            <div className='app-content'>
              { isLoggedIn && <Header /> }
              <PrivateRoute exact path='/contests' authenticated={isLoggedIn} component={Contests} />
              <PrivateRoute path='/contests/add' authenticated={isLoggedIn} component={TestComponent2} />
              <PrivateRoute path='/contests/:id' authenticated={isLoggedIn} component={TestComponent3} />
            </div>
          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

const TestComponent = () => <DocumentTitle title={'Contestr Dashboard - Orca - Compulse Integrated Marketing'}><h1>Component</h1></DocumentTitle>;
const TestComponent2 = () => <DocumentTitle title={'Create Contest - Orca - Compulse Integrated Marketing'}><h1>Add New</h1></DocumentTitle>;
const TestComponent3 = ({ match }: any) => <h1>Component - { match.params.id }</h1>;

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