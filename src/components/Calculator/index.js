import React from 'react';
import NumberButton from '../NumberButton';
import MathActionButton from '../MathActionButton';
import ClearButton from '../ClearButton';
import CalculatorDisplay from '../CalculatorDisplay';
import EqualButton from '../EqualButton';
import BackButton from '../BackButton';
import NegativeButton from '../NegativeButton';

import './Calculator.css';

const Calculator = () => (
  <div className={'calculator'}>
    <div className="display">
      <CalculatorDisplay />
    </div>
    <div className={'numbers'}>
      <div className={'first-tile'}>
       <ClearButton />
       <BackButton />
       <NegativeButton />
       <MathActionButton buttonValue="/" />
     </div>
      <div className={'second-tile'}>
        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <MathActionButton buttonValue="*" />
      </div>
      <div className={'third-tile'}>
       <NumberButton buttonValue={4} />
       <NumberButton buttonValue={5} />
       <NumberButton buttonValue={6} />
       <MathActionButton buttonValue="-" />
     </div>
      <div className={'fourth-tile'}>
        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <MathActionButton buttonValue="+" />
      </div>
      <div className={'last-tile'}>
        <NumberButton buttonValue={0} />
        <NumberButton buttonValue="." />
        <EqualButton />
      </div>
    </div>
  </div>
);

export default Calculator;