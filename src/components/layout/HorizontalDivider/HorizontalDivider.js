import React from 'react';
import classnames from 'classnames';

// Custom imports and styles.
import styles from './HorizontalDivider.module.scss';

const HorizontalDivider = ({ className = '' }) => (
  <span className={classnames(styles.divider, className)}></span>
);

export default HorizontalDivider;