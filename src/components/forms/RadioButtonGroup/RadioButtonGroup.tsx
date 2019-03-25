import React, { Component } from 'react';
import { Field } from 'redux-form';

// Custom styles and imports
import { Label, RadioButton } from '../../forms';

interface IRadioButtonGroupProps {
  name: string;
}

interface IRadioButtonGroupState {
  value: string;
}

class RadioButtonGroup extends Component<IRadioButtonGroupProps, IRadioButtonGroupState> {
  state = {
    value: ''
  };

  buildRadioButtons = () => {

  }

  render() {
    const { name } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <Label dark required>Is there an existing JIRA ticket?</Label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Field name={name} type='radio' component={RadioButton} label='Yes' value='Yes' />
          <Field name={name} type='radio' component={RadioButton} label='No' value='No' />
        </div>
      </React.Fragment>
    )
  }
}

export default RadioButtonGroup;