import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Custom style import
import styles from './UserInput.module.scss';

class UserInput extends Component {
  state = {
    isFocused: false
  };

  handleEvent = ({ type }) => {
    switch (type) {
      case 'focus':
        this.setState({ isFocused: true });
        break;
      
      default:
      case 'blur':
        this.setState({ isFocused: false });
    }
  }

  handleChange = (e) => {
    const { handleInput } = this.props;
    
    handleInput('username', e.currentTarget.value);
  }
  
  render () {
    const { isFocused } = this.state;
    const { className, placeholder } = this.props;

    return (
      <div className={classnames(styles.wrapper, isFocused ? styles.focused : '')}>
        <input 
          className={classnames(styles.username, className)}
          placeholder={placeholder}
          onBlur={this.handleEvent}
          onFocus={this.handleEvent}
          onChange={this.handleChange}
        />

        <button className={styles.button} >
          <FontAwesomeIcon icon={['far', 'fingerprint']} className={styles.icon} />
        </button>
      </div>
    );
  }
}

export default UserInput;