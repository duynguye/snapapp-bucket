import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './PageTitle.module.scss';

interface IPageTitleProps {
  children?: React.ReactNode;
  className?: string | [string]
}

const PageTitle = ({ children, className = '' }: IPageTitleProps) => (
  <h1 className={classnames(styles.title, className)}>{children}</h1>
);

export default PageTitle;