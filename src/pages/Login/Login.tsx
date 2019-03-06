import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// Custom styles and imports
import { authenticate, currentSession, AuthCode } from '../../lib/auth';
import { LoginForm } from '../../layouts';
import { Logo } from '../../components/nav';
import { TextButton } from '../../components/buttons';
import backgroundImage from '../../components/_global/background.jpg';
import leftBackgroudImage from '../../components/_global/animal-animal-photography-blur-1683688.jpg';
import styles from './Login.module.scss';

class Login extends Component {
  state = {
    leftImageLoaded: false,
    rightImageLoaded: false,
    username: '',
    password: ''
  };

  handleInput = (type: string, value: string | undefined): void => {
    this.setState({ [type]: value });
  }

  handleSubmit = () => {
    const { username, password } = this.state;

    authenticate(username, password).then(response => {
      if (response.status === AuthCode.Success) {
        console.log('Successfully logged in: ', response.user);
      
        currentSession().then(result => console.log(result));
      } else {
        console.log(response.status);
      }
    });
  }

  render() {
    const { leftImageLoaded, rightImageLoaded } = this.state;

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
            <LoginForm handleInput={this.handleInput} />
            <TextButton
              config={['fal', 'sign-in']}
              className={styles.loginButton}
              onClick={this.handleSubmit}
            >
              Login
            </TextButton>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;