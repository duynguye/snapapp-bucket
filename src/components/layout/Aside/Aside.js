import React from 'react';

// Custom styles
import styles from './Aside.module.scss';

export default ({ children }) => (
  <div className={styles.sidebar}>
    { children }
  </div>
);
