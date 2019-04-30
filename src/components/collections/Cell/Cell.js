import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Cell.module.scss';

const Cell = ({ header = false, children, link, centered = false }) => {
  if (header) {
    return <div className={classNames(styles.cell, styles.cellHeader)}>{children}</div>;
  } else {
    return (
      <div className={classNames(styles.cell, styles.cellBody, centered && styles.centered)}>
        {
          link
            ? <Link to={link} className={styles.link}>{children}</Link>
            : children
        }
      </div>
    );
  }
}

export default Cell;
