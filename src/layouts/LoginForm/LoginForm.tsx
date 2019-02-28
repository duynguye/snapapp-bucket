import React from 'react';

// Custom style and component imports
import { PageTitle } from '../../components/text';
import { HorizontalDivider } from '../../components/layout';
import styles from './LoginForm.module.scss';

const LoginForm = () => (
  <div className={styles.container}>
    <PageTitle className={styles.withMargin}>Login to the System</PageTitle>
    <HorizontalDivider />
  </div>
);

export default LoginForm;
