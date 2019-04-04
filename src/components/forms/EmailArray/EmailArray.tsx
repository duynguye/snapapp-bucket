import React, { Component, KeyboardEvent } from 'react';
import { Field, WrappedFieldProps, WrappedFieldArrayProps } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

// Custom imports and styles
import { CompactButton } from '../../buttons';
import { SmallInput } from '../../forms'
import styles from './EmailArray.module.scss';

/**
 * Field renderer for individual email components.
 */
const renderField = ({ input }: WrappedFieldProps) => (
  <input 
    {...input}
    className={styles.emailText} 
    data-lpignore='true' 
  />
);

class EmailArray extends Component<any> {
  private emailField = React.createRef<HTMLInputElement>();

  validateEmail = (email: string): boolean => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(String(email).toLowerCase());
  }

  handleKeyPress = (e: any) => {
    const emailField = this.emailField.current!;
    const { fields } = this.props;

    if (e.key === 'Enter') {
      e.stopPropagation();
      e.preventDefault();

      if (emailField.value.trim() === '') {
        return;
      }
  
      if (this.validateEmail(emailField.value) === false) {
        return;
      }

      fields.push(emailField.value);
      emailField.value = '';
    }
  }

  handleButtonPress = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const emailField = this.emailField.current!;
    const { fields } = this.props;

    if (emailField.value.trim() === '') {
      return;
    }

    if (this.validateEmail(emailField.value) === false) {
      return;
    }

    fields.push(emailField.value);
    emailField.value = '';
  }

  render() {
    const { fields, meta: { error }} = this.props;

    return (
      <ul className={styles.wrapper}>
        <li className={styles.add}>
          <SmallInput type='email' ref={this.emailField} onKeyPress={this.handleKeyPress} data-lpignore='true' required={false} />
          <CompactButton onClick={this.handleButtonPress}>
            <FontAwesomeIcon icon={['fal', 'plus']} />
          </CompactButton>
        </li>

        {
          fields.map((email: string, index: number) =>
            <li key={index} className={styles.email}>
              <Field name={email} type='text' component={renderField} />
              <button type='button' onClick={() => fields.remove(index)} className={styles.delete}>
                <FontAwesomeIcon icon={['far', 'times']} />
              </button>
            </li>
          )
        }
      </ul>
    );
  }
}

export default EmailArray;