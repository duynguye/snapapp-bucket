import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Import custom styles and components.
import styles from './TextButton.module.scss';

// Default prop declarations.
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  config?: any;
  disabled?: boolean;
  className?: string | [string]
}

/**
 * General purpose button that is just text.
 */
const TextButton = ({ children, onClick, className = '', config = [], disabled = false }: ButtonProps) => (
  <button className={classnames(styles.button, className)} onClick={onClick} disabled={disabled}>
    {config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : ''}
    {children}
  </button>
);

export default TextButton;
