import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className='btn btn-act'>{props.button.value}</button>
    );
};

export default ActionButton;