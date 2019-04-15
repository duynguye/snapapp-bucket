import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom styles
import styles from './IconButton.module.scss';

interface IIconButtonProps {
  className?: string | string[];
  icon: [string, string];
  size: number;
}

export default ({ className = '', icon, size }: IIconButtonProps) => (
  <button className={classnames(styles.button, className)}>
    <FontAwesomeIcon icon={['fas', 'chevron-down']} style={{ fontSize: size }}/>
  </button>
);
