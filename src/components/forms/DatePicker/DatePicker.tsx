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
          onChange={onChange}
          value={value}
          onClick={onClick}
        />

        <FontAwesomeIcon icon={['fas', 'calendar-alt']} className={styles.icon} />
      </div>
    )
  }
}

export default ({ input, required }: any) => (
  <React.Fragment>
    <DatePicker 
      {...input} 
      className={styles.input}
      customInput={<CustomInput/>}
      dateFormat='ddd, MMM D, YYYY hh:mm A'
      showTimeSelect
      timeIntervals={30}
      required={required}
      popperPlacement='bottom'
      onChange={(date: any) => {
        input.onChange(moment(date).format('ddd, MMM D, YYYY hh:mm A'));
      }}
    />
  </React.Fragment>
);