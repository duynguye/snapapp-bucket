import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './Label.module.scss';

interface ILabelProps {
  children: React.ReactNode;
  className?: string | [string];
  dark?: boolean;
  required?: boolean;
}

export default ({ children, className = '', dark = false, required = false }: ILabelProps) => (
  <label className={classnames(styles.formlabel, dark && styles.formLabelDark, className)}>
    {children}
    {required && '*'}
  </label>
);