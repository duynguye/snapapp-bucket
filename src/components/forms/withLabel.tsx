import React, { ComponentType } from 'react';

// Custom imports and styles
import { Label, FormSize } from './';
import styles from './withLabel.module.scss';

interface ILabelProps {
  label: string;
  required?: boolean;
  size?: FormSize;
}

/**
 * Interprets the sizing of the module.
 * @param size
 */
function getSizeStyle(size: FormSize): string {
  let style = '';

  switch (size) {
    case FormSize.Quarter:
      style = styles.quarter;
      break;

    case FormSize.ThreeQuarters:
      style = styles.threeQuarters;
      break;

    case FormSize.Half:
      style = styles.half;
      break;

    case FormSize.Third:
      style = styles.third;
      break;

    case FormSize.TwoThirds:
      style = styles.twoThirds;
      break;

    case FormSize.Full:
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
function withLabel<T extends ILabelProps>(WrappedComponent: ComponentType<T>) {
  return function WithLabel(props: T) {
    const { label, size = FormSize.Full, required = false } = props;
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