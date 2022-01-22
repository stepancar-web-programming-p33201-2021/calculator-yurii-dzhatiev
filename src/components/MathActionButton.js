import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const MathActionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="orange-button" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default MathActionButton;