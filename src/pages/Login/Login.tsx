import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// Custom styles and imports
import { LoginForm } from '../../layouts';
import { Logo } from '../../components/nav';
import { TextButton } from '../../components/buttons';
import backgroundImage from '../../components/_global/background.jpg';
import leftBackgroudImage from '../../components/_global/animal-animal-photography-blur-1683688.jpg';
import styles from './Login.module.scss';

class Login extends Component {
  state = {
    leftImageLoaded: false,
    rightImageLoaded: false
  };

  render() {
    const { leftImageLoaded, rightImageLoaded } = this.state;

    return (
      <DocumentTitle title='Orca - Login'>
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
            <LoginForm />
            <TextButton
              config={['fal', 'sign-in']}
              className={styles.loginButton}
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