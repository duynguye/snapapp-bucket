import React, { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

// Custom style and component imports
import { PageTitle } from '../../../components/text';
import { HorizontalDivider } from '../../../components/layout';
import { Label, UserInput, PassInput, FormGroup } from '../../../components/forms';
import styles from './RequireNewPassword.module.scss';

interface IRequireNewPassword {
  handleInput: (type: string, value: string) => void;
  handleSubmit: (e: KeyboardEvent) => void;
}

const RequireNewPassword = ({ handleInput, handleSubmit }: IRequireNewPassword) => (
  <div className={styles.container}>
    <PageTitle className={styles.withMargin}>New Password Required</PageTitle>
    <HorizontalDivider className={styles.divider} />
    
    <FormGroup className={styles.formMargin} clear>
      <Label>Password</Label>
      <PassInput placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;' handleInput={handleInput} handleKeyPress={handleSubmit} name='password' />
    </FormGroup>

    <FormGroup className={styles.formMargin} clear>
      <Label>Confirm Password</Label>
      <PassInput placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;' handleInput={handleInput} handleKeyPress={handleSubmit} name='passwordConfirm' />
    </FormGroup>
  </div>
);

export default RequireNewPassword;
