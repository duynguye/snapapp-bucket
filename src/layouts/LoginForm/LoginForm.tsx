import React from 'react';

// Custom style and component imports
import { PageTitle } from '../../components/text';
import { HorizontalDivider } from '../../components/layout';
import { Label, UserInput, PassInput, FormGroup } from '../../components/forms';
import styles from './LoginForm.module.scss';

const LoginForm = () => (
  <div className={styles.container}>
    <PageTitle className={styles.withMargin}>Login to the System</PageTitle>
    <HorizontalDivider className={styles.divider} />
    
    <FormGroup className={styles.formMargin}>
      <Label>Username</Label>
      <UserInput placeholder='hevy_devy' />
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
      <PassInput placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;' />
    </FormGroup>
  </div>
);

export default LoginForm;
