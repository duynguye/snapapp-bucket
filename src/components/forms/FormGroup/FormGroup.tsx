import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './FormGroup.module.scss';

interface IFormGroupProps {
  children: React.ReactNode;
  className?: string | undefined;
  clear?: boolean;
}

const FormGroup = ({ children, className = '', clear = false }: IFormGroupProps) => 
  <div className={classnames(!clear && styles.group, className)}>{children}</div>;

export default FormGroup;