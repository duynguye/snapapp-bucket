import React from 'react';

import { PageTitleWithButton } from '../../molecules';
import background from '../../_global/background.jpg';
import styles from './LocalMenu.module.scss';

interface ILocalMenuProps {
    onClick: () => any;
    title: string;
    children: React.ReactNode;
}

const LocalMenu = ({ onClick, title, children }: ILocalMenuProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <PageTitleWithButton onClick={onClick}>{title}</PageTitleWithButton>    
            </div>

            <div className={styles.body}>
                { children }
            </div>

            <img className={styles.background} src={background} alt="Background Image" />
        </div>
    );
}

export default LocalMenu;