import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDCRipple } from '@material/ripple';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    config?: any;
    disabled?: boolean;
}

/**
 * General purpose button that is colored blue.
 * @param param0 
 */
class Button extends Component {
    button = React.createRef<HTMLButtonElement>();

    componentDidMount() {
        const surface: any = this.button.current;
        const ripple = new MDCRipple(surface);
    }

    render () {
        const { onClick, disabled = false, config = [], children }: ButtonProps = this.props;

        return (
            <button ref={this.button} className={classNames(styles.button, 'mdc-ripple-surface', 'mdc-ripple-surface--light')} onClick={onClick} disabled={disabled}>
                { config.length > 0 ? <FontAwesomeIcon icon={config} className={styles.icon} /> : '' }
                { children }
            </button>
        )
    }
}

export default Button;