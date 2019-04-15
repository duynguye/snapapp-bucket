import React, { ReactNode } from 'react';

// Import custom styles
import styles from './Content.module.scss';

export default ({ children }: { children: ReactNode }) => (
  <div className={styles.content}>
    { children }
  </div>
)