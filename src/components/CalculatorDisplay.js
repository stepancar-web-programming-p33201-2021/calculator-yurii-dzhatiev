import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const CalculatorDisplay = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div>
      <h2 className={'current-number'}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
      <p className={'calc-text'}>
        {!storedNumber ? 'введите число' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </div>
  );
};

export default CalculatorDisplay;