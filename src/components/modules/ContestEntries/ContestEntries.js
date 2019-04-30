import React from 'react';
import moment from 'moment';

// Custom styles
import styles from './ContestEntries.module.scss';

export default ({ count, lastUpdated }) => (
  <div className={styles.container}>
    <span className={styles.total}>{ count }</span>

    {
      lastUpdated &&
      <div className={styles.lastUpdated}>
        <span className={styles.label}>Last Entry Received:</span>
        <span className={styles.date}>{ moment(new Date(lastUpdated)).format('MM/DD/YYYY') }</span>
      </div>
    }
  </div> 
);
