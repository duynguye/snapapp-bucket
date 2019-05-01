import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// Custom styles and imports
import { login, updateSession, setRequiredPassword } from 'store/user/user.actions';
import { LoginForm, RequireNewPassword } from 'forms/layouts';
import { Logo } from 'components/nav';
import { TextButton } from 'components/buttons';
import backgroundImage from '_global/background.jpg';
import leftBackgroudImage from '_global/animal-animal-photography-blur-1683688.jpg';
import styles from './Login.module.scss';
import { AUTHCODE_NEWPASSWORD, AUTHCODE_AWAITINGLOGIN } from 'lib/auth';

class Login extends Component {
  state = {
    leftImageLoaded: false,
    rightImageLoaded: false,
    username: '',
    password: '',
    passwordConfirm: '',
    validation: {
      hasNumber: false,
      hasLowercase: false,
      hasUppercase: false,
      validLength: false,
      hasSpecial: false,
      allValid: false
    }
  };

  handleInput = (type, value) => {
    const { currentState } = this.props;

    if (currentState === AUTHCODE_NEWPASSWORD) {
      if (type === 'password') {
        // Validate that a number exists
        const hasNumber = /\d/;
        const numberResult = hasNumber.test(value);

        // Validate that a lowercase exists
        const hasLowercase = /[a-z]+/g;
        const lowercaseResult = hasLowercase.test(value);

        // Validate that a lowercase exists
        const hasUppercase = /[A-Z]+/g;
        const uppercaseResult = hasUppercase.test(value);

        // Get the length of the password
        const length = value.length;
        const lengthValid = length >= 8;

        // Check to see if the password has a special character
        const hasSpecialChar = /[!@#$%^&*)(+=._-]+/g;
        const specialCharResult = hasSpecialChar.test(value);

        // Check to see if they are all valid
        const allValid = (numberResult && lowercaseResult && uppercaseResult && lengthValid && specialCharResult);

        this.setState({
          [type]: value,
          validation: {
            hasNumber: numberResult,
            hasLowercase: lowercaseResult,
            hasUppercase: uppercaseResult,
            validLength: lengthValid,
            hasSpecial: specialCharResult,
            allValid
          }
        });
      }
    } else {
      this.setState({ [type]: value });
    }
  }

  handleKeyPress = (e) => {
    const { currentState } = this.props;

    if (e.key === 'Enter') {
      if (currentState === AUTHCODE_AWAITINGLOGIN) {
        this.handleSubmit();
      }

      if (currentState === AUTHCODE_NEWPASSWORD) {
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
    const { currentState } = this.props;

    return (
      <DocumentTitle title='Login Dashboard - Orca - Compulse Integrated Marketing'>
        <div className={styles.container}>
          <div className={styles.left}>
            <img 
              src={leftBackgroudImage} 
              alt='presentation' 
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
              currentState === AUTHCODE_AWAITINGLOGIN &&
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
              currentState === AUTHCODE_NEWPASSWORD &&
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

const mapStateToProps = ({ user }) => ({
  user,
  currentState: user.currentState
});

export default withRouter(connect(mapStateToProps, { login, updateSession, setRequiredPassword  })(Login));
