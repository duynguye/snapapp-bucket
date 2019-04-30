import React, { Component } from 'react';
import classnames from 'classnames';

// Local imports and styles
import styles from './Navigation.module.scss';

/**
 * Navigation class wrapper for the global menu and local menu. This is a
 * wrapper object for presentational purposes only.
 * 
 * @props {object} props
 * @props {React.ReactNode} globalMenu  - Menu that contains application icons.
 * @props {React.ReactNode} localMenu   - Context menu for the current appplication.
 */

class Navigation extends Component {
  render() {
    const { globalMenu, localMenu, className = '' } = this.props;
  
    return (
      <div className={classnames(styles.nav, className)}>
        {globalMenu}
        {localMenu}
      </div>
    )
  }
}

export default Navigation;
