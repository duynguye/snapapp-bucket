import React from 'react';

// Import custom styles and components.
import { Badge, Avatar, NameTag } from '../../atoms';
import background from '../../_global/background.jpg';
import styles from './Header.module.scss';

// Temporary Handler
const onClickHandler = () => {
  return true;
}

interface IHeaderProps {
  badges?: React.ReactNode | [React.ReactNode];
  currentUser?: {
    name: string;
    title: string;
    avatar: string;
  };
}

const Header = ({ badges, currentUser }: IHeaderProps) => (
  <header className={styles.container}>
    <img src={background} alt={'Background'} className={styles.background} />

    <div style={{ display: 'flex', padding: '0 30px' }}>
      <Badge
        prefix='fal'
        icon='plus'
        onClick={onClickHandler}
      />

      <Badge
        prefix='fal'
        icon='folder'
        count={3}
        onClick={onClickHandler}
      />

      <Badge
        prefix='fal'
        icon='bell'
        count={123}
        onClick={onClickHandler}
      />
    </div>

    <NameTag title={'Web Designer'} right={true}>{'Devin Townsend'}</NameTag>
    <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />
  </header>
);

export default Header;