import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './PageTitle.module.scss';

const PageTitle = ({ children, className = '' }) => (
  <h1 className={classnames(styles.title, className)}>{children}</h1>
);

export default PageTitle;