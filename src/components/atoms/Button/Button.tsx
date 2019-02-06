import React from 'react';
import './Button.scss';

/**
 * General purpose button that is colored blue.
 * @param param0 
 */
const Button = ({ children, onClick, disabled = false }: { children: string, onClick: () => void, disabled?: boolean }): JSX.Element => {
    return (
        <button className='Button' onClick={onClick} disabled={disabled}>{ children }</button>
    );
}

export default Button;
