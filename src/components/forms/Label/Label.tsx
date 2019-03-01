import React from 'react';
import classnames from 'classnames';

// Custom styles
import styles from './Label.module.scss';

interface ILabelProps {
  children: React.ReactNode;
  className?: string | [string];
}

const Label = ({ children, className = '' }: ILabelProps) => (
  <label className={classnames(styles.formlabel, className)}>{children}</label>
);

export default Label;