import React, { Component } from 'react';
import { Field } from 'redux-form';

// Custom styles and imports
import { Label, RadioButton } from '../../forms';
import { getSizeStyle } from '../withLabel';
import { FormSize } from '../';

export interface IRadioButtonGroupProps {
  label: string;
  name: string;
  size?: FormSize;
  required?: boolean;
  values: string[];
}

class RadioButtonGroup extends Component<IRadioButtonGroupProps> {
  buildRadioButtons = () => {
    const { name, values } = this.props;

    return values.map(value => (
      <Field key={value} name={name} type='radio' component={RadioButton} label={value} value={value} />
    ));
  }

  render() {
    const radioButtons = this.buildRadioButtons();
    const { label, size = FormSize.Full, required = false } = this.props;
    const style = getSizeStyle(size);

    return (
      <div
        style={{ padding: '0 10px' }}
        className={style}
      >
        <Label dark required={required}>{label}</Label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          { radioButtons }
        </div>
      </div>
    )
  }
}

export default RadioButtonGroup;