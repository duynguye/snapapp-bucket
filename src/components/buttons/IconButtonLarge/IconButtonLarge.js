import React from 'react';
import classNames from 'classnames';
import styles from './IconButtonLarge.module.scss';

/**
 * Small action button with icon
 */
const IconButtonLarge = ({ action, children, classes }) => (
    <button onClick={action} className={classNames(styles.button, classes)}>
        <span className={styles.span}>
            {children}
        </span>
    </button>
);

export default IconButtonLarge;