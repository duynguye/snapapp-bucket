import React, { Component } from 'react';
import { Field } from 'redux-form';

// Custom styles and imports
import { Label, RadioButton } from '../../forms';
import { getSizeStyle } from '../withLabel';
import { FormSize } from '../';
import styles from './RadioButtonGroup.module.scss';

export interface IRadioButtonGroupProps {
  horizontal?: boolean;
  label: string;
  name: string;
  size?: FormSize;
  required?: boolean;
  values: string[];
}

class RadioButtonGroup extends Component<IRadioButtonGroupProps> {
  buildRadioButtons = () => {
    const { name, values, horizontal = false } = this.props;

    return values.map(value => (
      <Field key={value} name={name} type='radio' component={RadioButton} label={value} value={value} className={horizontal && styles.horizontalButton}/>
    ));
  }

  render() {
    const radioButtons = this.buildRadioButtons();
    const { label, size = FormSize.Full, required = false, horizontal = false } = this.props;
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