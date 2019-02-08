import React from 'react';
import styles from './IconButtonLarge.module.scss';

interface IIconButtonLargeProps {
    action: () => {},
    children: React.ReactNode
}

/**
 * Small action button with icon
 */
const IconButtonLarge = ({ action, children }: IIconButtonLargeProps) => (
    <button onClick={action} className={styles.button}>
        <span className={styles.span}>
            {children}
        </span>
    </button>
);

export default IconButtonLarge;