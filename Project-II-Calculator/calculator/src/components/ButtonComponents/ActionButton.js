import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className='btn btn-act' style={{width: 112*props.button.width}}>{props.button.value}</button>
    );
};

export default ActionButton;