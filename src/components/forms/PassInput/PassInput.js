import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Custom style import
import styles from './PassInput.module.scss';

class PassInput extends Component {
  state = {
    isFocused: false
  };

  handleEvent = ({ type }) => {
    switch (type) {
      case 'focus':
        this.setState({ isFocused: true });
        break;
      
      case 'blur':
        this.setState({ isFocused: false });
    }
  }

  handleChange = (e) => {
    const { handleInput, name = 'password' } = this.props;
    
    handleInput(name, e.currentTarget.value);
  }
  
  render () {
    const { isFocused } = this.state;
    const { className, handleKeyPress, placeholder} = this.props;

    return (
      <div className={classnames(styles.wrapper, isFocused ? styles.focused : '')}>
        <input 
          className={classnames(styles.password, className)}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          onBlur={this.handleEvent}
          onFocus={this.handleEvent}
          onChange={this.handleChange}
          type={'password'}
        />

        <button className={styles.button} >
          <FontAwesomeIcon icon={['fal', 'eye']} className={styles.icon} />
        </button>
      </div>
    );
  }
}

export default PassInput;