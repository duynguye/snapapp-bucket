import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Notification.module.scss';

export default ({ children }) => (
  <div className={styles.container}>
    <FontAwesomeIcon icon={['fas', 'times-circle']} className={styles.icon} />
    <span className={styles.text}>{ children }</span>
  </div>
);