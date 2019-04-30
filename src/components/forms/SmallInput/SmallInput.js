import React, { forwardRef } from 'react';

// Custom styles
import styles from './SmallInput.module.scss';

export default forwardRef(({ type, required, onKeyPress, maxWidth = '100%' }, ref) => (
  <input 
    type={type}
    className={styles.input}
    data-lpignore='true'
    onKeyPress={onKeyPress}
    ref={ref}
    style={{ maxWidth }} 
    required={required} 
  />
));
