import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './FormGroup.module.scss';

interface IFormGroupProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const FormGroup = ({ children, className = '' }: IFormGroupProps) => <div className={classnames(styles.group, className)}>{children}</div>;

export default FormGroup;