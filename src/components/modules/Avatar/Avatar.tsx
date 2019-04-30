import React, { Component } from 'react';
import styles from './Avatar.module.scss';

interface IAvatarProps {
    url: string;
}

interface IAvatarState {
    loaded: boolean;
}

class Avatar extends Component<IAvatarProps, IAvatarState> {
    state = {
        loaded: false
    }

    render () {
        return (
            <div className={styles.container}>
                <img src={this.props.url} alt={''} className={styles.image} />
            </div>
        )
    }
}

export default Avatar;