import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './AsideTitle.module.scss';

interface IAsideTitleProps {
  children?: React.ReactNode;
  className?: string | [string]
}

export default ({ children, className = '' }: IAsideTitleProps) => (
  <h1 className={classnames(styles.title, className)}>{children}</h1>
);
