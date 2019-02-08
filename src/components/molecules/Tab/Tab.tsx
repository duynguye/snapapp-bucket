import React from 'react';
import classNames from 'classnames';
import styles from './Tab.module.scss';

interface ITabProps {
    children?: React.ReactNode;
    count?: number;
    active?: boolean;
    onClick: () => {};
}

/**
 * Singular Tab
 */
const Tab = ({ children, count = 0, active = false, onClick }: ITabProps) => (
    <button className={styles.tab} onClick={onClick}>
        <span className={classNames(styles.label, active ? styles.labelActive : '')}>
            {children} <span className={classNames(styles.pill, active ? styles.pillActive : '')}>{count}</span>
        </span>

        <span className={classNames(styles.indicator, active ? styles.indicatorActive: '')}></span>
    </button>
);

export default Tab;