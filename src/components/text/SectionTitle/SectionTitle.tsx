import React from 'react';
import classNames from 'classnames';

// Custom Imports
import styles from './SectionTitle.module.scss';

interface ISectionTitleProps {
    children?: React.ReactNode;
    classes?: string | Array<string>;
}

const SectionTitle = ({ children, classes }: ISectionTitleProps) => (
    <h1 className={classNames(styles.title, classes)}>{ children }</h1>
);

export default SectionTitle;