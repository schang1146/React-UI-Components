import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className='btn btn-num'>{props.button.value}</button>
    );
};

export default NumberButton;