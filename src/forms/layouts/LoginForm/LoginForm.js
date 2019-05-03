import React from 'react';
import { Link } from 'react-router-dom';

// Custom style and component imports
import { PageTitle } from 'components/text';
import { HorizontalDivider } from 'components/layout';
import { Label, UserInput, PassInput, FormGroup, Notification } from 'components/forms';
import styles from './LoginForm.module.scss';

const LoginForm = ({ handleInput, handleSubmit }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <PageTitle className={styles.withMargin}>Login to the System</PageTitle>
      <Link to='/' className={styles.link}>Can't access your account?</Link>
    </div>
    <HorizontalDivider className={styles.divider} />

    <Notification display>Sorry, we couldn't find an account with that username and/or password. Can we help you recover your <Link to='/'>credentials</Link>?</Notification>
    <Notification display>Sorry, we couldn't find an account with that username and/or password. Can we help you recover your <Link to='/'>credentials</Link>?</Notification>
    
    <FormGroup className={styles.formMargin} clear>
      <Label>Username</Label>
      <UserInput placeholder='hevy_devy' handleInput={handleInput} />
    </FormGroup>

    <FormGroup className={styles.formMargin} clear>
      <Label>Password</Label>
      <PassInput placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;' handleInput={handleInput} handleKeyPress={handleSubmit} />
    </FormGroup>
  </div>
);

export default LoginForm;
