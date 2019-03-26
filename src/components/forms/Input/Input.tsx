import React from 'react';

// Custom styles
import styles from './Input.module.scss';

export default ({ input, required, maxWidth = '100%' }: any) => (
  <input {...input} type="text" className={styles.input} style={{ maxWidth }} required={required} />
);