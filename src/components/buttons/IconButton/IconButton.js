import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom styles
import styles from './IconButton.module.scss';

export default ({ className = '', icon, size }) => (
  <button className={classnames(styles.button, className)}>
    <FontAwesomeIcon icon={icon} style={{ fontSize: size }}/>
  </button>
);
