import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

// Custom styles and imports
import { LoginForm } from '../../layouts';
import { TextButton } from '../../components/buttons';
import backgroundImage from '../../components/_global/background.jpg';
import styles from './Login.module.scss';

const Login = () => (
  <DocumentTitle title='Orca - Login'>
    <div className={styles.container}>
      <div className={styles.left}>
        <img src='https://source.unsplash.com/random' alt='background image' />
      </div>

      <div className={styles.right}>
        <img src={backgroundImage} alt={'Background'} className={styles.background} />
        
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

export default Login;