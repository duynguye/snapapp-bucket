import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

// Import custom styles and components.
import { logout } from '../../../store/user/user.actions';
import { Badge, Avatar, NameTag } from '../../atoms';
import background from '../../_global/background.jpg';
import styles from './Header.module.scss';

// Temporary Handler
const onClickHandler = () => {
  return;
}

interface IHeaderProps {
  badges?: React.ReactNode | [React.ReactNode];
  currentUser?: {
    name: string;
    title: string;
    avatar: string;
  };
  history: History;
  logout: typeof logout;
}

class Header extends Component<IHeaderProps> {
  handleLogout = () => {
    const { history, logout } = this.props;

    logout(history);
  }

  render() {
    const { badges, currentUser } = this.props;

    return (
      <header className={styles.container}>
        <img src={background} alt={'Background'} className={styles.background}/>

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
        <div style={{ display: 'flex', padding: '0 0 0 10px' }}>
          <Badge 
            prefix='fal'
            icon='sign-out'
            onClick={this.handleLogout}
          />
        </div>
      </header>
    )
  }
}

export default withRouter(connect<any>(null, { logout })(Header));