import React, { Component } from 'react';
import styles from './Avatar.module.scss';

class Avatar extends Component {
  state = {
    loaded: false
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.props.url} alt={''} className={styles.image} />
      </div>
    )
  }
}

export default Avatar;