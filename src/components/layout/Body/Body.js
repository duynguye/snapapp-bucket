import React from 'react';

// Custom styles
import styles from './Body.module.scss';

export default ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
)