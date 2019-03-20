import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './TableRow.module.scss';

class TableRow extends Component {
    state = {
        hovering: false,
        active: false
    };

    onMouseEnter = () => {
        this.setState({ hovering: true });
    }

    onMouseLeave = () => {
        this.setState({ hovering: false });
    }

    render() {
        const { hovering, active } = this.state;
        const { children } = this.props;

        return (
            <div
                className={styles.row}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className={classNames(styles.checkbox, hovering || active ? styles.hovering : '')} onClick={() => { this.setState({ active: !active }) }}>
                    <FontAwesomeIcon icon={[active ? 'fas' : 'fal', 'square']} />
                </div>

                {children}
            </div>
        );
    }
}

export default TableRow;