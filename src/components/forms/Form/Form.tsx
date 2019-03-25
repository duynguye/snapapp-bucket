import React from 'react';
import { SubmitHandler } from 'redux-form';
import classnames from 'classnames';

// Custom components and styles
import styles from './Form.module.scss';

// Interfaces and types
interface IFormProps {
  children?: React.ReactNode;
  className?: string | [string] | undefined;
  onSubmit: SubmitHandler;
}

/**
 * Wrapper for the form body, this fills as much of the height of the container as possible.
 */
export default ({ children, className, onSubmit }: IFormProps) => (
  <form className={classnames(styles.container, className)} onSubmit={onSubmit}>
    {children}
  </form>
)