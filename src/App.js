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
import './_global/fontawesome';

/**
 * Imports for custom components and styles if applicable.
 */
import { Navigation } from './forms/layouts';
import { 
  GlobalMenu, 
  LocalMenu, 
  ContextLink,
  Header
} from 'components/nav';
import { Login, Contests, AddContest, ContestView } from 'pages';
import { setAuthState, loginStatus, loginSuccess } from 'store/user/user.actions';

/**
 * Mock data
 */
import apps from 'lib/mocks/apps';
import localMenuProps from 'lib/mocks/context';

class App extends Component {
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

  buildContextMenu = (menuItems) => {
    return menuItems.map((item, i) => 
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

            <Switch>
              <Route exact path='/' render={props => <Redirect to={{ pathname: '/contests' }} />} />
              <Route path='/login' component={Login} />
            </Switch>

            <div className='app-content'>
              { isLoggedIn && <Header /> }
              <PrivateRoute exact path='/contests' authenticated={isLoggedIn} component={Contests} />
              <PrivateRoute exact path='/contests/add' authenticated={isLoggedIn} component={AddContest} />
              <PrivateRoute path='/contests/:id' authenticated={isLoggedIn} component={ContestView} />
            </div>
          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
    }} />
  )} />
);

const mapStateToProps = ({ user, form, contests }) => ({
  user,
  form,
  contests
});

export default connect(mapStateToProps, { setAuthState, loginStatus, loginSuccess })(App);