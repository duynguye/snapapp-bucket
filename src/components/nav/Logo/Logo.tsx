import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Custom imports and styles.
import { ReactComponent as LogoImage } from './logo.svg';
import styles from './Logo.module.scss';

/**
 * Displays the main logo of the entire application.
 */
const Logo = ({ className = '' }: { className?: string }) => (
    <Link to='/'>
        <LogoImage className={classnames(styles.logo, className)}/>
    </Link>
);

export default Logo;
