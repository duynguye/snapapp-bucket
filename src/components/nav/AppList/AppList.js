import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppButton } from 'components/buttons';

const AppList = ({ apps }) => {
  const appList = apps.map(({ exact, path, title, prefix, icon }) => {
    return (
      <AppButton exact={exact} path={path} title={title} key={path}>
        <FontAwesomeIcon icon={[prefix, icon]} />
      </AppButton>
    );
  });

  return appList;
}

export default AppList;
