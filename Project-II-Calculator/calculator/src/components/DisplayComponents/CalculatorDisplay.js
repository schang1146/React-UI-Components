import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div className='Calculator'>
            <div className='row'>
            </div>
            <div className='row'>
                <ActionButton action='clear' />
                <ActionButton action='&#247;' /> {/* divide */}
            </div>
            <div className='row'>
                <NumberButton value='7' />
                <NumberButton value='8' />
                <NumberButton value='9' />
                <ActionButton action='&#215;' /> {/* times */}
            </div>
            <div className='row'>
                <NumberButton value='4' />
                <NumberButton value='5' />
                <NumberButton value='6' />
                <ActionButton action='&#8722;' /> {/* minus */}
            </div>
            <div className='row'>
                <NumberButton value='1' />
                <NumberButton value='2' />
                <NumberButton value='3' />
                <ActionButton action='&#43;' /> {/* plus */}
            </div>
            <div className='row'>
                <NumberButton value='0' />
                <ActionButton action='&#61;' /> {/* equals */}
            </div>
        </div>
    );
};

export default CalculatorDisplay;