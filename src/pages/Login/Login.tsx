import React, { Component, KeyboardEvent } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { History } from 'history';

// Custom styles and imports
import { AuthCode } from '../../lib/auth';
import { login, updateSession, setRequiredPassword } from '../../store/user/user.actions';
import { User } from '../../store/user/user.types';
import { LoginForm, RequireNewPassword } from '../../forms/layouts';
import { Logo } from '../../components/nav';
import { TextButton } from '../../components/buttons';
import backgroundImage from '../../components/_global/background.jpg';
import leftBackgroudImage from '../../components/_global/animal-animal-photography-blur-1683688.jpg';
import styles from './Login.module.scss';

interface ILoginProps {
  history: History;
  login: typeof login;
  updateSession: typeof updateSession;
  currentState: AuthCode; 
  setRequiredPassword: typeof setRequiredPassword;
  location: any;
  user?: any;
}

interface ILoginState {
  leftImageLoaded: boolean;
  rightImageLoaded: boolean;
  username: string;
  password: string;
  passwordConfirm: string;
}

class Login extends Component<ILoginProps, ILoginState> {
  state = {
    leftImageLoaded: false,
    rightImageLoaded: false,
    username: '',
    password: '',
    passwordConfirm: ''
  };

  handleInput = (type: string, value: string | undefined): void => {
    this.setState({ [type]: value } as any);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    const { currentState } = this.props;

    if (e.key === 'Enter') {
      if (currentState == AuthCode.AwaitingLogin) {
        this.handleSubmit();
      }

      if (currentState == AuthCode.NewPasswordRequired) {
        this.handleNewPassword();
      }
    }
  }

  handleSubmit = () => {
    const { history } = this.props;
    const { username, password } = this.state;
    const path = this.props.location.state ? this.props.location.state.from.pathname : '/';

    this.props.login(username, password, history, path);
  }

  handleNewPassword = () => {
    const { history, user } = this.props;
    const { password } = this.state;

    this.props.setRequiredPassword(user.user, password, history);
  }

  render() {
    const { leftImageLoaded, rightImageLoaded } = this.state;
    const { currentState, user } = this.props;

    return (
      <DocumentTitle title='Login Dashboard - Orca - Compulse Integrated Marketing'>
        <div className={styles.container}>
          <div className={styles.left}>
            <img 
              src={leftBackgroudImage} 
              alt='background image' 
              style={{ opacity: leftImageLoaded ? 1 : 0 }}
              onLoad={() => this.setState({ leftImageLoaded: true })}
            />

            <div className={styles.copyright}>
              <span>Orca Management Software (Build 0.1a)</span>
              <span>|</span>
              <span><Link to='/'>About ORCA</Link></span>
            </div>
          </div>

          <div className={styles.right}>
            <img 
              src={backgroundImage} 
              alt={'Background'} 
              className={styles.background} 
              style={{ opacity: rightImageLoaded ? 0.3 : 0 }}
              onLoad={() => this.setState({ rightImageLoaded: true })}
            />
            
            <Logo className={styles.logo} />
            {
              currentState == AuthCode.AwaitingLogin &&
              <React.Fragment>
                <LoginForm handleInput={this.handleInput} handleSubmit={this.handleKeyPress} />
                <TextButton
                  config={['fal', 'sign-in']}
                  className={styles.loginButton}
                  onClick={this.handleSubmit}
                >
                  Login
                </TextButton>
              </React.Fragment>
            }

            {
              currentState == AuthCode.NewPasswordRequired &&
              <React.Fragment>
                <RequireNewPassword handleInput={this.handleInput} handleSubmit={this.handleKeyPress} />
                <TextButton
                    config={['fal', 'sign-in']}
                    className={styles.loginButton}
                    onClick={this.handleNewPassword}
                  >
                  Update Password
                </TextButton>
              </React.Fragment>
            }

            <div className={styles.request}>
              <span>Not a member? To request an account, please contact a <Link to='/'>system administrator</Link>.</span>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = ({ user }: any) => ({
  user,
  currentState: user.currentState
});

export default withRouter(connect<any>(mapStateToProps, { login, updateSession, setRequiredPassword  })(Login));