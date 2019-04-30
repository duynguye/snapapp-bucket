import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './Label.module.scss';

export default ({ children, className = '', dark = false, required = false }) => (
  <label className={classnames(styles.formlabel, dark && styles.formLabelDark, className)}>
    {children}
    {required && '*'}
  </label>
);