import React, { Component } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
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

  handleKeyPress = (e: any) => {
    const emailField = this.emailField.current!;
    const { fields }: any = this.props;

    if (e.key === 'Enter') {
      e.stopPropagation();
      e.preventDefault();

      fields.push(emailField.value);
      emailField.value = '';
    }
  }

  handleButtonPress = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const emailField = this.emailField.current!;
    const { fields }: any = this.props;

    fields.push(emailField.value);
    emailField.value = '';
  }

  render() {
    const { fields, meta: { error }}: any = this.props;

    return (
      <ul className={styles.wrapper}>
        <li className={styles.add}>
          <SmallInput type='email' ref={this.emailField} onKeyPress={this.handleKeyPress} data-lpignore='true' required={false} />
          <CompactButton onClick={this.handleButtonPress}>
            <FontAwesomeIcon icon={['fal', 'plus']} />
          </CompactButton>
        </li>

        {
          fields.map((email: any, index: any) =>
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