import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Local imports and styles
import { SmallText } from 'components/text';
import { AppList, Logo } from 'components/nav';
import { HorizontalDivider } from 'components/layout';
import styles from './GlobalMenu.module.scss';

const GlobalMenu = ({ apps }) => (
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
