import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from './logo.svg';
import styles from './Logo.module.scss';

/**
 * Displays the main logo of the entire application.
 */
const Logo = () => (
    <Link to='/'>
        <LogoImage className={styles.logo}/>
    </Link>
);

export default Logo;
