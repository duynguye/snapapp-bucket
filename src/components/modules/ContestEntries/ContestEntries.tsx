import React from 'react';
import moment from 'moment';

// Custom styles
import styles from './ContestEntries.module.scss';

interface IContestEntriesProp {
  count: number;
  lastUpdated?: string;
}

export default ({ count, lastUpdated }: IContestEntriesProp) => (
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
