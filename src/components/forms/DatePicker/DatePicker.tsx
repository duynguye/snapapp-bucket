import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

// Custom styles
import styles from './DatePicker.module.scss';

interface ICustomInputProps {
  onChange?: any;
  className?: string | undefined;
  value?: string;
  onClick?: any;
}

/**
 * This allows the input to have a custom icon without affecting the date picker location.
 */
class CustomInput extends Component<ICustomInputProps> {
  render() {
    const { onChange, className, value, onClick} = this.props;

    return (
      <div className={styles.wrapper}>
        <input
          className={className}
          type='text'
          value={value}
          onChange={onChange}
          onClick={onClick}
        />

        <FontAwesomeIcon icon={['fas', 'calendar-alt']} className={styles.icon} />
      </div>
    )
  }
}

class CustomDatePicker extends Component<any> {
  state = {
    startDate: new Date()
  }

  handleChange = (e: any) => {
    this.setState({ startDate: e });
  }

  render() {
    const { required } = this.props;

    return (
      <React.Fragment>
        <DatePicker 
          // {...input} 
          className={styles.input}
          customInput={<CustomInput/>}
          dateFormat='eee, MMM d, YYYY hh:mm aa'
          selected={this.state.startDate}
          showTimeSelect
          timeIntervals={30}
          required={required}
          popperPlacement='bottom'
          onChange={this.handleChange}
        />
      </React.Fragment>
    )
  }
}

export default CustomDatePicker;