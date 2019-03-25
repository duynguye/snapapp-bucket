import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Custom styles and imports
import styles from './RadioButton.module.scss';

export default ({ input, label, type, meta: { touched, error} }: any) => {
  return (
    <div className={classnames(styles.container, input.checked && styles.checked)}>
      <input {...input} className={styles.input} type={type} />
      
      <div className={styles.wrapper}>
        {
          input.checked 
          ? <FontAwesomeIcon className={styles.icon} icon={['fas', 'check-circle']} /> 
          : <FontAwesomeIcon className={styles.icon} icon={['fal', 'circle']} /> 
        }

        <label className={styles.label}>{label}</label>
      </div>
    </div>
  );
}