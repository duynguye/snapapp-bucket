import React from 'react';
import { Link } from 'react-router-dom';

// Custom imports and styles
import styles from './Breadcrumbs.module.scss';

export default () => {
  return (
    <div className={styles.container}>
      <Link to='/contests'>Contests</Link> / <span>ORCA-22546</span>
    </div>
  );
}
