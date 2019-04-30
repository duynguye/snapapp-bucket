import React from 'react';
import classnames from 'classnames';

// Custom components and styles
import styles from './FormBody.module.scss';

/**
 * Wrapper for the form body, this fills as much of the height of the container as possible.
 */
export default ({ children, className }) => (
  <div className={classnames(styles.container, className)}>
    {children}
  </div>
)