import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Import custom styles and components.
import styles from './TextButton.module.scss';

/**
 * General purpose button that is just text.
 */
const TextButton = ({ children, onClick, className = '', config = [], disabled = false, style }) => (
  <button className={classnames(styles.button, className)} style={style} onClick={onClick} disabled={disabled}>
    {config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : ''}
    {children}
  </button>
);

export default TextButton;
