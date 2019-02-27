import React from 'react';

// Local imports and styles
import { 
  Logo, 
  HorizontalDivider,
  SmallText 
} from '../atoms';
import AppList from '../molecules/AppList/AppList';
import styles from './GlobalMenu.module.scss';

/**
 * 
 */
type ApplicationNode = {
  [index: number]: {
    exact: boolean,
    path: string,
    title: string,
    prefix: string,
    icon: string
  }
};

interface IGlobalMenuProps {
  apps: ApplicationNode | [ApplicationNode]
}

const GlobalMenu = ({ apps }: IGlobalMenuProps) => (
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
