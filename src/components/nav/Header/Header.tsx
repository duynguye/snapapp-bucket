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

  handleActionButton = () => {
    const { history } = this.props;
    const path = history.location.pathname;

    let paths = path.split('/');
    paths.shift();

    switch (paths[0]) {
      case 'contests':
        history.push('/contests/add');
        break;

      default:
        history.push('/');
    }
  }

  render() {
    const { badges, currentUser, history } = this.props;

    return (
      <header className={styles.container}>
        <img src={background} alt={'Background'} className={styles.background}/>

        <div style={{ display: 'flex', padding: '0 30px' }}>
          <Badge
            prefix='fal'
            icon='plus'
            onClick={this.handleActionButton}
          />

          <Badge
            prefix='fal'
            icon='bell'
            count={0}
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