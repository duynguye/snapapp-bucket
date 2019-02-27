import React from 'react';
import classNames from 'classnames';
import styles from './IconButtonLarge.module.scss';

interface IIconButtonLargeProps {
    action: any,
    children: React.ReactNode,
    classes: string | [string];
}

/**
 * Small action button with icon
 */
const IconButtonLarge = ({ action, children, classes }: IIconButtonLargeProps) => (
    <button onClick={action} className={classNames(styles.button, classes)}>
        <span className={styles.span}>
            {children}
        </span>
    </button>
);

export default IconButtonLarge;