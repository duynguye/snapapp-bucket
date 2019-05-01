import React, { Component } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom imports and styles
import { CompactButton } from 'components/buttons';
import { SmallInput } from 'components/forms'
import styles from './EmailArray.module.scss';

/**
 * Field renderer for individual email components.
 */
const renderField = ({ input }) => (
  <input 
    {...input}
    className={styles.emailText} 
    data-lpignore='true' 
  />
);

class EmailArray extends Component {
  emailField = React.createRef();

  validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(String(email).toLowerCase());
  }

  handleKeyPress = (e) => {
    const emailField = this.emailField.current;
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

  handleButtonPress = (e) => {
    e.preventDefault();

    const emailField = this.emailField.current;
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
    const { fields } = this.props;

    return (
      <ul className={styles.wrapper}>
        <li className={styles.add}>
          <SmallInput type='email' ref={this.emailField} onKeyPress={this.handleKeyPress} data-lpignore='true' required={false} />
          <CompactButton onClick={this.handleButtonPress}>
            <FontAwesomeIcon icon={['fal', 'plus']} />
          </CompactButton>
        </li>

        {
          fields.map((email, index) =>
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