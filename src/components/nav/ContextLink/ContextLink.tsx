import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './ContextLink.module.scss';

interface IContextLinkProps {
  children?: React.ReactNode;
  path: string;
  exact: boolean;
  icon: any;
}

const ContextLink = ({ children, path, exact, icon }: IContextLinkProps) => (
  <NavLink exact={exact} to={path} className={styles.container} activeClassName={styles.active}>
    <span className={styles.leadingIcon}>
      <FontAwesomeIcon icon={icon} />
    </span>

    <span className={styles.text}>
      {children}
    </span>
  </NavLink>
);

export default ContextLink;