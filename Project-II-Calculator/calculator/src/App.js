import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <div className='Calculator'>
            <div className='row'>
              <CalculatorDisplay />
            </div>
            <div className='row'>
                <ActionButton button={ButtonClear} />
                <ActionButton button={ButtonDivide} value='&#247;' /> {/* divide */}
            </div>
            <div className='row'>
                <NumberButton value='7' />
                <NumberButton value='8' />
                <NumberButton value='9' />
                <ActionButton button={ButtonTimes} value='&#215;' /> {/* times */}
            </div>
            <div className='row'>
                <NumberButton value='4' />
                <NumberButton value='5' />
                <NumberButton value='6' />
                <ActionButton button={ButtonMinus} value='&#8722;' /> {/* minus */}
            </div>
            <div className='row'>
                <NumberButton value='1' />
                <NumberButton value='2' />
                <NumberButton value='3' />
                <ActionButton button={ButtonPlus} value='&#43;' /> {/* plus */}
            </div>
            <div className='row'>
                <NumberButton value='0' />
                <ActionButton button={ButtonEqual} value='&#61;' /> {/* equal */}
            </div>
        </div>
    </div>
  );
};

export default App;
