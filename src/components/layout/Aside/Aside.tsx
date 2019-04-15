import React, { ReactNode } from 'react';

// Custom styles
import styles from './Aside.module.scss';

export default ({ children }: { children: ReactNode }) => (
  <div className={styles.sidebar}>
    { children }
  </div>
);
