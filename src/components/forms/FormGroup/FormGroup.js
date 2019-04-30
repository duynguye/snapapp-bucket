import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './FormGroup.module.scss';

const FormGroup = ({ children, className = '', clear = false }) => 
  <div className={classnames(!clear && styles.group, className)}>{children}</div>;

export default FormGroup;