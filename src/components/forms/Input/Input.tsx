import React from 'react';

// Custom styles
import styles from './Input.module.scss';

export default ({ input, required, maxWidth = '100%' }: any) => (
  <input 
    {...input}
    className={styles.input}
    data-lpignore='true'
    type="text"
    style={{ maxWidth }} 
    required={required} 
  />
);