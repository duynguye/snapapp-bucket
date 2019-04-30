import React from 'react';

// Custom styles and imports
import { Label } from 'components/forms';
import styles from './ProjectDetails.module.scss';

export default ({ label, text }) => {
  if (text) {
    return (
      <div className={styles.container}>
        <Label dark className={styles.label}>{ label }:</Label>
        <span className={styles.text}>{ text }</span>
      </div>
    );
  }

  return null;
};