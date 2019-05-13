import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className='btn btn-act'>{props.button.value}</button>
    );
};

const ButtonClear = {
    value: 'clear',
};

const ButtonDivide = {
    value: 'clear',
};

const ButtonTimes = {
    value: 'clear',
};

const ButtonMinus = {
    value: 'clear',
};

const ButtonPlus = {
    value: 'clear',
};

const ButtonEqual = {
    value: 'clear',
};

export default ActionButton;