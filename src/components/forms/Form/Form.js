import React from 'react';
import classnames from 'classnames';

// Custom components and styles
import styles from './Form.module.scss';

/**
 * Wrapper for the form body, this fills as much of the height of the container as possible.
 */
const FormWithRef = React.forwardRef((props, ref) => {
  const { children, className, onSubmit } = props;

  return (
    <form className={classnames(styles.container, className)} onSubmit={onSubmit} ref={ref} autoComplete='off'>
      {children}
    </form>
  );
});

export default FormWithRef;
