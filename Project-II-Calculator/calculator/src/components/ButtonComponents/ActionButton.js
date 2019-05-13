import React from 'react';
import './Button.css';

const ActionButton = (button) => {
    return (
        <button className='btn btn-act'>{button.action}</button>
    );
};

export default ActionButton;