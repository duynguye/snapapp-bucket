import React from 'react';
import styles from './IconButtonSmall.module.scss';

/**
 * Small action button with icon
 */
const IconButtonSmall = ({ action, children }) => (
    <button onClick={action} className={styles.button}>
        <span className={styles.span}>
            {children}
        </span>
    </button>
);

export default IconButtonSmall;