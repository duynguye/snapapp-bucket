import React from 'react';
import styles from './SectionTitle.module.scss';

interface ISectionTitleProps {
    children?: React.ReactNode;
}

const SectionTitle = ({ children }: ISectionTitleProps) => (
    <h1 className={styles.title}>{ children }</h1>
);

export default SectionTitle;