import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const CalculatorButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" className={'dark-gray-button'} onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;