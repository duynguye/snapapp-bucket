import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo, HorizontalDivider, AppButton, SmallText } from '../../atoms';
import styles from './AppBar.module.scss';

interface IAppList {
    exact: boolean;
    path: string;
    title: string;
    prefix: any;
    icon: any;
}

const AppBar = ({ apps }: any) => {
    const appList = apps.map(({ exact, path, title, prefix, icon }: IAppList) => {
        return (
            <AppButton exact={exact} path={path} title={title} key={title}>
                <FontAwesomeIcon icon={[prefix, icon]} />
            </AppButton>
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Logo />
                <HorizontalDivider />
            </div>
            
            <div className={styles.body}>
                {appList}
            </div>

            <div className={styles.footer}>
                <SmallText>Build 1130.01</SmallText>    
            </div>
        </div>
    );
};

export default AppBar;