import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Label } from '../';
import styles from './DropdownInput.module.scss';

class DropdownInput extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Label dark>Personnel & Role:</Label>
        
        <div className={styles.fieldWrapper}>
          <div className={styles.inputWrapper}>
            <input type='text' className={styles.input} placeholder='John Doe #project-manager' />
            <FontAwesomeIcon icon={['fas', 'id-card-alt']} className={styles.icon} />
          </div>

          <button className={styles.button}>
            <FontAwesomeIcon icon={['fal', 'plus']} />
          </button>
        </div>
      </div>
    )
  }
}

export default DropdownInput;
