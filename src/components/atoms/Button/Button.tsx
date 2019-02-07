import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

// Default prop declarations
interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    config?: any;
    disabled?: boolean;
}

/**
 * General purpose button that is colored blue.
 */
const Button = ({ children, onClick, config = [], disabled = false }: ButtonProps) => (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
        { config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : '' }
        { children }
    </button>
);

export default Button;
