import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo, HorizontalDivider, AppButton, SmallText } from '../../atoms';
import AppList from '../../molecules/AppList/AppList';
import styles from './GlobalMenu.module.scss';

const GlobalMenu = ({ apps }: any) => (
    <div className={styles.container}>
        <div className={styles.header}>
            <Logo />
            <HorizontalDivider />
        </div>
        
        <div className={styles.body}>
            <AppList apps={apps} />
        </div>

        <div className={styles.footer}>
            <SmallText>Build 1130.01</SmallText>    
        </div>
    </div>
);

export default GlobalMenu;
