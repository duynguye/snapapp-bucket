import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppButton } from '../../atoms';

interface IAppList {
    exact: boolean;
    path: string;
    title: string;
    prefix: any;
    icon: any;
}

const AppList = ({ apps }: any) => {
    const appList = apps.map(({ exact, path, title, prefix, icon }: IAppList) => {
        return (
            <AppButton exact={exact} path={path} title={title} key={path}>
                <FontAwesomeIcon icon={[prefix, icon]} />
            </AppButton>
        );
    });

    return appList;
}

export default AppList;
