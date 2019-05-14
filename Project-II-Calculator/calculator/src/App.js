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
                <ActionButton button={ButtonData.ButtonClear} />
                <ActionButton button={ButtonData.ButtonDivide} /> {/* divide */}
            </div>
            <div className='row'>
                <NumberButton button={ButtonData.Button7} />
                <NumberButton button={ButtonData.Button8} />
                <NumberButton button={ButtonData.Button9} />
                <ActionButton button={ButtonData.ButtonTimes} /> {/* times */}
            </div>
            <div className='row'>
                <NumberButton button={ButtonData.Button4} />
                <NumberButton button={ButtonData.Button5} />
                <NumberButton button={ButtonData.Button6} />
                <ActionButton button={ButtonData.ButtonMinus} /> {/* minus */}
            </div>
            <div className='row'>
                <NumberButton button={ButtonData.Button1} />
                <NumberButton button={ButtonData.Button2} />
                <NumberButton button={ButtonData.Button3} />
                <ActionButton button={ButtonData.ButtonPlus} /> {/* plus */}
            </div>
            <div className='row'>
                <NumberButton button={ButtonData.Button0} />
                <ActionButton button={ButtonData.ButtonEqual} /> {/* equal */}
            </div>
        </div>
    </div>
  );
};

const ButtonData = {
  ButtonClear: {
    value: 'clear',
    width: 3,
  },
  ButtonDivide: {
    value: '\xF7',
    width: 1,
  },
  ButtonTimes: {
    value: '\xD7',
    width: 1,
  },
  ButtonMinus: {
    value: '\u2212',
    width: 1,
  },
  ButtonPlus: {
    value: '\x2b',
    width: 1,
  },
  ButtonEqual: {
    value: '\x3d',
    width: 1,
  },
  Button0: {
    value: '0',
    width: 3,
  },
  Button1: {
    value: '1',
    width: 1,
  },
  Button2: {
    value: '2',
    width: 1,
  },
  Button3: {
    value: '3',
    width: 1,
  },
  Button4: {
    value: '4',
    width: 1,
  },
  Button5: {
    value: '5',
    width: 1,
  },
  Button6: {
    value: '6',
    width: 1,
  },
  Button7: {
    value: '7',
    width: 1,
  },
  Button8: {
    value: '8',
    width: 1,
  },
  Button9: {
    value: '9',
    width: 1,
  },
};

export default App;
