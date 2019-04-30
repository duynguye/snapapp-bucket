import React from 'react';
import classNames from 'classnames';
import styles from './NameTag.module.scss';

const NameTag = ({ children, title, right = false }) => (
    <div className={classNames(styles.container, right ? styles.right : '')}>
        <p className={styles.name}>{children}</p>
        <span className={styles.title}>{title}</span>
    </div>
);

export default NameTag;