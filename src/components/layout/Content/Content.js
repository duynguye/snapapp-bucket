import React from 'react';

// Import custom styles
import styles from './Content.module.scss';

export default ({ children }) => (
  <div className={styles.content}>
    { children }
  </div>
)