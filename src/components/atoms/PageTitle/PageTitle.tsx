import React from 'react';
import styles from './PageTitle.module.scss';

interface IPageTitleProps {
    children?: React.ReactNode;
}

const PageTitle = ({ children }: IPageTitleProps) => (
    <h1 className={styles.title}>{ children }</h1>
);

export default PageTitle;