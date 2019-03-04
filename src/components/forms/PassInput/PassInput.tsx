import React, { Component } from 'react';
import classnames from 'classnames';

// Custom style import
import styles from './PassInput.module.scss';

interface IPassInputProps {
  className?: string | [string];
  placeholder?: string;
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
  
  render () {
    const { isFocused }: IPassInputState = this.state;
    const { className, placeholder }: IPassInputProps = this.props;

    return (
      <div className={classnames(styles.wrapper, isFocused ? styles.focused : '')}>
        <input 
          className={classnames(styles.password, className)}
          placeholder={placeholder}
          onBlur={this.handleEvent}
          onFocus={this.handleEvent}
          type={'password'}
        />
      </div>
    );
  }
}

export default PassInput;