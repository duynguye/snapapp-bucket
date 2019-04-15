import React, { ReactNode } from 'react';

// Custom styles
import styles from './Body.module.scss';

export default ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>
    { children }
  </div>
)