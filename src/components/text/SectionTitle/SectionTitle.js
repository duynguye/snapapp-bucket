import React from 'react';
import classNames from 'classnames';

// Custom Imports
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, classes }) => (
    <h1 className={classNames(styles.title, classes)}>{ children }</h1>
);

export default SectionTitle;