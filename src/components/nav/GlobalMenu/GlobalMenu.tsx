import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <a href='/' target='_blank'>
        <FontAwesomeIcon icon={['fal', 'question-circle']} className={styles.help} />
      </a>
      <SmallText>Build 0.1a</SmallText>
    </div>
  </div>
);

export default GlobalMenu;
