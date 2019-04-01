import React, { Component, KeyboardEvent } from 'react';
import classnames from 'classnames';

// Custom style import
import styles from './PassInput.module.scss';

interface IPassInputProps {
  className?: string | [string];
  placeholder?: string;
  handleInput: (type: string, value: string | undefined) => void;
  handleKeyPress: (e: KeyboardEvent) => void;
}

interface IPassInputState {
  isFocused: boolean
}

class PassInput extends Component<IPassInputProps, IPassInputState> {
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
    
    handleInput('password', e.currentTarget.value);
  }
  
  render () {
    const { isFocused }: IPassInputState = this.state;
    const { className, handleKeyPress, placeholder }: IPassInputProps = this.props;

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
      </div>
    );
  }
}

export default PassInput;