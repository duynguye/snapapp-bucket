import React, { Component } from 'react';
import { Field } from 'redux-form';

// Custom styles and imports
import { Label, RadioButton } from '../../forms';

interface IRadioButtonGroupProps {
  name: string;
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

    return (
      <React.Fragment>
        <Label dark required>Is there an existing JIRA ticket?</Label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          { radioButtons }
        </div>
      </React.Fragment>
    )
  }
}

export default RadioButtonGroup;