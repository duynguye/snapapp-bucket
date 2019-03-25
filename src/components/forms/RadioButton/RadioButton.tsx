import React, { Component } from 'react';

const RadioButton = ({ checked, value, onChange }: any) => (
  <div>
    <input name='group' type='radio' value={value} onChange={onChange} />
    
    <div>
      {checked && <span>ICON</span>}
      <label>Radio Button Text</label>
    </div>
  </div>
);

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

  handleChange = (e: any) => {
    this.setState({
      value: e.currentTarget.value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <RadioButton value={'First'} checked={value === 'First'} onChange={this.handleChange} />
        <RadioButton value={'Second'} checked={value === 'Second'} onChange={this.handleChange} />
      </React.Fragment>
    )
  }
}

export default RadioButtonGroup;