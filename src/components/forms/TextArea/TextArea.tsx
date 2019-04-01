import React from 'react';

// Custom styles
import styles from './TextArea.module.scss';

export default ({ input, required, maxWidth = '100%' }: any) => (
  <textarea {...input} className={styles.textarea} style={{ maxWidth }} required={required} rows='5'></textarea>
);