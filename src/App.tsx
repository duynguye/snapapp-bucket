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
  }

  checkUser = () => {
    Auth.currentAuthenticatedUser().then(user => {
      this.props.loginStatus(true);
      this.props.setAuthState(false);
      this.props.loginSuccess(user);
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
            {!isLoggedIn ? <Redirect to={{ pathname: '/login' }}/> : ''}

            <Route path='/login' component={Login} />
            <Route exact path='/contests' render={() => (
              <Navigation 
                globalMenu={<GlobalMenu apps={apps} />}
                localMenu={<LocalMenu title='Contests' onClick={() => {}}>{contextMenu}</LocalMenu>}
              />
            )} />

            <Route path='/contests/projects' render={() => (
              <Navigation 
                globalMenu={<GlobalMenu apps={apps} />}
                localMenu={<LocalMenu title='Contests' onClick={() => {}}>{contextMenu}</LocalMenu>}
              />
            )} />

          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = ({ user }: { user: UserState }): AppState => ({
  user
});

export default connect(mapStateToProps, { setAuthState, loginStatus, loginSuccess })(App);
