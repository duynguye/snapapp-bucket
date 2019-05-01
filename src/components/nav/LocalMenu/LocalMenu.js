import React from 'react';

import { PageTitle } from 'components/text';
import background from '_global/background.jpg';
import styles from './LocalMenu.module.scss';

const LocalMenu = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <PageTitle>{title}</PageTitle>    
            </div>

            <div className={styles.body}>
                { children }
            </div>

            <img className={styles.background} src={background} alt="underwater scene" />
        </div>
    );
}

export default LocalMenu;