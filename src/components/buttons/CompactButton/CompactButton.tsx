import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CompactButton.module.scss';

// Default prop declarations
interface ButtonProps {
    children?: React.ReactNode;
    onClick(e: React.FormEvent<HTMLButtonElement>): void;
    config?: any;
    disabled?: boolean;
    type?: string | undefined;
}

/**
 * General purpose button that is colored blue.
 */
export default ({ children, onClick, config = [], disabled = false, ...rest }: ButtonProps) => (
    <button className={styles.button} onClick={onClick} disabled={disabled} {...rest}>
        { config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : '' }
        { children }
    </button>
);

