import React, { forwardRef } from 'react';

// Custom styles
import styles from './SmallInput.module.scss';

interface ICompactInputProps {
  type: 'email' | 'text' | 'tel';
  required: boolean;
  onKeyPress(e: React.FormEvent<HTMLInputElement>): void;
  maxWidth?: number | string | undefined;
}

export default forwardRef<HTMLInputElement, ICompactInputProps>(({ type, required, onKeyPress, maxWidth = '100%' }, ref) => (
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
