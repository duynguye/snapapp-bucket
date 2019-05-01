import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './AppButton.module.scss';

/**
 * Button that links to other applications within the infrastructure.
 */
const AppButton = ({ children, path, title = '', exact = false }) => {
  const [isHovering, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <NavLink
      exact={exact}
      to={path}
      className={styles.button}
      activeClassName={styles.active}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <span className={classNames(styles.span, isHovering ? styles.spanActive : '')}>{title}</span>
    </NavLink>
  );
}

// class AppButton extends Component {
//     state = {
//         isHovering: false
//     };

//     onMouseEnter = () => {
//         this.setState({
//             isHovering: true
//         });
//     }

//     onMouseLeave = () => {
//         this.setState({
//             isHovering: false
//         });
//     }

//     render () {
//         const { children, path, title = '', exact = false } = this.props;
//         const { isHovering } = this.state;

//         return (
//             <NavLink 
//                 exact={exact} 
//                 to={path} 
//                 className={styles.button} 
//                 activeClassName={styles.active}
//                 onMouseEnter={this.onMouseEnter}
//                 onMouseLeave={this.onMouseLeave}
//             >
//                 {children}
//                 <span className={classNames(styles.span, isHovering ? styles.spanActive : '')}>{title}</span>
//             </NavLink>
//         );
//     }
// }

export default AppButton;