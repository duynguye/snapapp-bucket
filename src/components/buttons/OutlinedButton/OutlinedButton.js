import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

// Custom styles
import styles from './OutlinedButton.module.scss';

const OutlinedButton = ({ prefix, icon, onClick, classes, tooltip = '' }) => {
  const hash = icon + Math.random().toString(32).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  return (
    <React.Fragment>
      <button data-tip data-for={hash} className={classNames(styles.button, classes)} onClick={onClick}>
        <FontAwesomeIcon icon={[prefix, icon]} className={styles.icon} />
      </button>

      {
        tooltip &&
        <ReactTooltip id={hash} type='dark' place='top'>
          <span>{tooltip}</span>
        </ReactTooltip>
      }
    </React.Fragment>
  );
};

export default OutlinedButton;
