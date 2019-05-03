import React from 'react';

// Custom style and component imports
import { PageTitle } from 'components/text';
import { HorizontalDivider } from 'components/layout';
import { Label, PassInput, FormGroup } from 'components/forms';
import styles from './RequireNewPassword.module.scss';

const placeholder = '&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;';

const RequireNewPassword = ({ handleInput, handleSubmit }) => (
  <div className={styles.container}>
    <PageTitle className={styles.withMargin}>New Password Required</PageTitle>
    <HorizontalDivider className={styles.divider} />
    
    <FormGroup className={styles.formMargin} clear>
      <Label>Password</Label>
      <PassInput placeholder={placeholder} handleInput={handleInput} handleKeyPress={handleSubmit} name='password' />
    </FormGroup>

    <FormGroup className={styles.formMargin} clear>
      <Label>Confirm Password</Label>
      <PassInput placeholder={placeholder} handleInput={handleInput} handleKeyPress={handleSubmit} name='passwordConfirm' />
    </FormGroup>
  </div>
);

export default RequireNewPassword;
