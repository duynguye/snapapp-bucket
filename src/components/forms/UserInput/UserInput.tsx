import React, { Component } from 'react';
import classnames from 'classnames';

// Custom style import
import styles from './UserInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IUserInputProps {
  className?: string | [string];
  placeholder?: string;
  handleInput: (type: string, value: string) => void;
}

interface IUserInputState {
  isFocused: boolean
}

class UserInput extends Component<IUserInputProps, IUserInputState> {
  state = {
    isFocused: false
  };

  handleEvent = ({ type }: { type: string }) => {
    switch (type) {
      case 'focus':
        this.setState({ isFocused: true });
        break;
      
      case 'blur':
        this.setState({ isFocused: false });
    }
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { handleInput } = this.props;
    
    handleInput('username', e.currentTarget.value);
  }
  
  render () {
    const { isFocused }: IUserInputState = this.state;
    const { className, placeholder, handleInput }: IUserInputProps = this.props;

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