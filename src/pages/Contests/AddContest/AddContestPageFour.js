import React from 'react';
import DocumentTitle from 'react-document-title';
import Spinner from 'react-spinkit';

import styles from './AddContest.module.scss';

export default () => {
  return (
    <DocumentTitle title='Creating new contest - Orca - Compulse Integrated Marketing'>
      <div className={styles.loader}>         
        <Spinner color='#5c7aff' style={{ marginBottom: 50 }} name='pacman' />   
        <p>Submitting</p>
      </div>
    </DocumentTitle>
  );
}
