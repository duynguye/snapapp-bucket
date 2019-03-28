import React from 'react';
import classnames from 'classnames';

// Custom components and styles
import styles from './FormAside.module.scss';

// Interfaces and types
interface IFormAsideProps {
  children?: React.ReactNode;
  className?: string | [string] | undefined;
}

/**
 * Wrapper for the form body, this fills as much of the height of the container as possible.
 */
export default ({ children, className }: IFormAsideProps) => (
  <div className={classnames(styles.container, className)}>
    {children}
  </div>
);