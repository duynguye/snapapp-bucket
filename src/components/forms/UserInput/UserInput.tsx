import React, { Component } from 'react';
import classnames from 'classnames';

// Custom style import
import styles from './UserInput.module.scss';

interface IUserInputProps {
  className?: string | [string];
  placeholder?: string;
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
  
  render () {
    const { isFocused }: IUserInputState = this.state;
    const { className, placeholder }: IUserInputProps = this.props;

    return (
      <div className={classnames(styles.wrapper, isFocused ? styles.focused : '')}>
        <input 
          className={classnames(styles.username, className)}
          placeholder={placeholder}
          onBlur={this.handleEvent}
          onFocus={this.handleEvent}
        />
      </div>
    );
  }
}

export default UserInput;