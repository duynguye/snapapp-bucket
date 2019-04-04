import React from 'react';

// Local imports and styles
import { SmallText } from '../../atoms';
import { Logo } from '../';
import { HorizontalDivider } from '../../layout';
import AppList from '../../molecules/AppList/AppList';
import styles from './GlobalMenu.module.scss';

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
      <SmallText>Build 0.1a</SmallText>
    </div>
  </div>
);

export default GlobalMenu;
