import React from 'react';
import './Button.css';

const NumberButton = (button) => {
    return (
        <button className='btn btn-num'>{button.value}</button>
    );
};

export default NumberButton;