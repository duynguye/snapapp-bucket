import React from 'react';

// Custom imports and styles
import { 
  Label,
  FORMSIZE_FULL,
  FORMSIZE_HALF,
  FORMSIZE_QUARTER,
  FORMSIZE_THIRD,
  FORMSIZE_THREEQUARTERS,
  FORMSIZE_TWOTHIRDS
} from 'components/forms';
import styles from './withLabel.module.scss';

/**
 * Interprets the sizing of the module.
 * @param size
 */
function getSizeStyle(size) {
  let style = '';

  switch (size) {
    case FORMSIZE_QUARTER:
      style = styles.quarter;
      break;

    case FORMSIZE_THREEQUARTERS:
      style = styles.threeQuarters;
      break;

    case FORMSIZE_HALF:
      style = styles.half;
      break;

    case FORMSIZE_THIRD:
      style = styles.third;
      break;

    case FORMSIZE_TWOTHIRDS:
      style = styles.twoThirds;
      break;

    case FORMSIZE_FULL:
    default:
      style = styles.full;
      break;
  }

  return style;
}

/**
 * This HOC takes a component and wraps it with a label and a container to allow for flexible styling.
 * @param WrappedComponent 
 */
function withLabel(WrappedComponent) {
  return function WithLabel(props) {
    const { label, size = FORMSIZE_FULL, required = false } = props;
    const style = getSizeStyle(size);

    return (
      <div
        style={{ padding: '0 10px' }}
        className={style}
      >
        <Label dark required={required}>{label}</Label>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export {
  getSizeStyle,
  withLabel
};