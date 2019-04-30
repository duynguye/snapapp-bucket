import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import custom styles and components.
import { logout } from 'store/user/user.actions';
import { Badge, Avatar } from 'components/modules';
import { NameTag } from 'components/text';
import background from '_global/background.jpg';
import styles from './Header.module.scss';

// Temporary Handler
const onClickHandler = () => {
  return;
}

class Header extends Component {
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

export default withRouter(connect(null, { logout })(Header));