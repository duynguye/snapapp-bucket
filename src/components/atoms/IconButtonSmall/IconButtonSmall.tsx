import React from 'react';
import styles from './IconButtonSmall.module.scss';

interface IIconButtonSmallProps {
    action: () => {},
    children: React.ReactNode
}

/**
 * Small action button with icon
 */
const IconButtonSmall = ({ action, children }: IIconButtonSmallProps) => (
    <button onClick={action} className={styles.button}>
        <span className={styles.span}>
            {children}
        </span>
    </button>
);

export default IconButtonSmall;