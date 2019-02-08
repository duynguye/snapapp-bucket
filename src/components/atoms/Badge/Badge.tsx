import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import styles from './Badge.module.scss';

interface IBadgeProps {
    prefix: any;
    icon: any;
    count: number;
    onClick: () => {};
}

const Badge = ({ prefix, icon, count, onClick }: IBadgeProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} onClick={onClick}>
                <FontAwesomeIcon icon={[prefix, icon]} className={styles.icon} />

                { count ? <span className={count >= 10 ? styles.badgeExtended : styles.badge}>{count > 99 ? '99+' : count}</span> : '' }
            </div>
        </div>
    )
}

export default Badge;
