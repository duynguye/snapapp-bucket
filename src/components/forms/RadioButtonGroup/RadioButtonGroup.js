import React, { Component } from 'react';
import { Field } from 'redux-form';

// Custom styles and imports
import { getSizeStyle } from 'components/forms/withLabel';
import { Label, RadioButton, FORMSIZE_FULL } from 'components/forms';
import styles from './RadioButtonGroup.module.scss';

class RadioButtonGroup extends Component {
  buildRadioButtons = () => {
    const { name, values, horizontal = false } = this.props;

    return values.map(value => (
      <Field key={value} name={name} type='radio' component={RadioButton} label={value} value={value} className={horizontal && styles.horizontalButton}/>
    ));
  }

  render() {
    const radioButtons = this.buildRadioButtons();
    const { label, size = FORMSIZE_FULL, required = false, horizontal = false } = this.props;
    const style = getSizeStyle(size);

    return (
      <div
        style={{ padding: '0 10px' }}
        className={style}
      >
        <Label dark required={required}>{label}</Label>
        <div style={{ display: 'flex' }} className={horizontal ? styles.horizontal : styles.vertical}>
          { radioButtons }
        </div>
      </div>
    )
  }
}

export default RadioButtonGroup;