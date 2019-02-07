import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './AppButton.module.scss';

// Default props for the button
interface IAppButtonProps {
    children?: React.ReactNode;
    path?: any;
    exact?: boolean;
    title?: string;
}

interface IAppButtonState {
    isHovering: boolean;
}

/**
 * Button that links to other applications within the infrastructure.
 */
class AppButton extends Component {
    state: IAppButtonState = {
        isHovering: false
    };

    onMouseEnter = () => {
        this.setState({
            isHovering: true
        });
    }

    onMouseLeave = () => {
        this.setState({
            isHovering: false
        });
    }

    render () {
        const { children, path, title = '', exact = false }: IAppButtonProps = this.props;
        const { isHovering }: IAppButtonState = this.state;

        return (
            <NavLink 
                exact={exact} 
                to={path} 
                className={styles.button} 
                activeClassName={styles.active}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {children}
                <span className={classNames(styles.span, isHovering ? styles.spanActive : '')}>{title}</span>
            </NavLink>
        );
    }
}
export default AppButton;