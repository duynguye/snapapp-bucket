import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './AsideTitle.module.scss';

export default ({ children, className = '' }) => (
  <h1 className={classnames(styles.title, className)}>{children}</h1>
);
