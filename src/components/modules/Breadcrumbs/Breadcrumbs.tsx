import React from 'react';
import { Link } from 'react-router-dom';

// Custom imports and styles
import styles from './Breadcrumbs.module.scss';

export default ({ id }: { id: number }) => {
  return (
    <div className={styles.container}>
      <Link to='/contests'>Contests</Link> / <span>ORCA-{id}</span>
    </div>
  );
}
