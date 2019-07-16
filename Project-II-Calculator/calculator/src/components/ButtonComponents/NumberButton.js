import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className='btn btn-num' style={{width: 112*props.button.width}}>{props.button.value}</button>
    );
};

export default NumberButton;