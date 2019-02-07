import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from './logo.svg';

/**
 * Displays the main logo of the entire application.
 */
const Logo = () => (
    <Link to='/'>
        <LogoImage />
    </Link>
);

export default Logo;
