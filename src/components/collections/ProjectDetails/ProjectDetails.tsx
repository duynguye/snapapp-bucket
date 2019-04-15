import React from 'react';

// Custom styles and imports
import { Label } from '../../forms';
import styles from './ProjectDetails.module.scss';

interface IProjectDetailsProp {
  label: string;
  text?: string;
}

export default ({ label, text }: IProjectDetailsProp) => {
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