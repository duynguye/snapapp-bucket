import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

// Custom styles
import styles from './TimePicker.module.scss';

/**
 * This allows the input to have a custom icon without affecting the date picker location.
 */
class CustomInput extends Component {
  render() {
    const { onChange, className, value, onClick} = this.props;

    return (
      <div className={styles.wrapper}>
        <input
          className={className}
          type='text'
          onChange={onChange}
          value={value}
          onClick={onClick}
          data-lpignore='true'
        />

        <FontAwesomeIcon icon={['fas', 'clock']} className={styles.icon} />
      </div>
    )
  }
}

export default ({ input, required }) => (
  <React.Fragment>
    <DatePicker 
      {...input} 
      className={styles.input}
      customInput={<CustomInput/>}
      dateFormat='hh:mm A'
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      required={required}
      popperPlacement='bottom'
      onChange={(date) => input.onChange(moment(date).format('hh:mm A'))}
    />
  </React.Fragment>
);