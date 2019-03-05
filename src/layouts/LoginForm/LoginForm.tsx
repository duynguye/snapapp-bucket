import React from 'react';
import { Link } from 'react-router-dom';

// Custom style and component imports
import { PageTitle } from '../../components/text';
import { HorizontalDivider } from '../../components/layout';
import { Label, UserInput, PassInput, FormGroup } from '../../components/forms';
import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  handleInput: (type: string, value: string | undefined) => void;
}

const LoginForm = ({ handleInput }: ILoginFormProps) => (
  <div className={styles.container}>
    <PageTitle className={styles.withMargin}>Login to the System</PageTitle>
    <HorizontalDivider className={styles.divider} />
    
    <FormGroup className={styles.formMargin}>
      <Label>Username</Label>
      <UserInput placeholder='hevy_devy' handleInput={handleInput} />
    </FormGroup>

    <FormGroup className={styles.formMargin}>
      <Label>Password</Label>
      <PassInput placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;' handleInput={handleInput} />
    </FormGroup>

    <FormGroup>
      <Link to='/' className={styles.reset}>Need help logging in?</Link>
    </FormGroup>
  </div>
);

export default LoginForm;
