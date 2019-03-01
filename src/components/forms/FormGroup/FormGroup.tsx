import React from 'react';

interface IFormGroupProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const FormGroup = ({ children, className = '' }: IFormGroupProps) => <div className={className}>{children}</div>;

export default FormGroup;