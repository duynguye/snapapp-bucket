import React, { Props } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './TextButton.module.scss';

interface ButtonProps {
    children: string;
    onClick: () => void;
    config: any;
    disabled?: boolean;
}

/**
 * General purpose button that is just text.
 * @param param0 
 */
const TextButton = ({ children, onClick, config = [], disabled = false }: ButtonProps): JSX.Element => {  
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            { config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : '' }
            { children }
        </button>
    );
}

export default TextButton;
