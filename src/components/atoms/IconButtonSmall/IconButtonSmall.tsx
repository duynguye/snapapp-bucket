import React from 'react';

interface IIconButtonSmallProps {
    action: () => {},
    children: React.ReactNode
}

/**
 * Small action button with icon
 */
const IconButtonSmall = ({ action, children }: IIconButtonSmallProps) => (
    <button onClick={action}>
        {children}
    </button>
);

export default IconButtonSmall;