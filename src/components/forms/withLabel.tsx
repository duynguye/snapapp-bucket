import React, { ComponentType } from 'react';

// Custom imports and styles
import { Label } from './';

interface ILabelProps {
  label: string;
  required?: boolean;
}

function withLabel<T extends ILabelProps>(WrappedComponent: ComponentType<T>) {
  return function WithLabel(props: T) {
    const { label, required = false } = props;

    return (
      <div>
        <Label dark required={required}>{label}</Label>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default withLabel;