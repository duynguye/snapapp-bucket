import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './DashboardSectionTitle.module.scss';

interface IDashboardTitleProps {
  children?: React.ReactNode;
  className?: string | [string]
}

export default ({ children, className = '' }: IDashboardTitleProps) => (
  <h1 className={classnames(styles.title, className)}>{children}</h1>
);
