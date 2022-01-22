import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const ClearButton = () => {
  const { clearCalcValue } = useContext(NumberContext);
  return (
    <button type="button" className="gray-button" onClick={() => clearCalcValue()}>
      C
    </button>
  );
};

export default ClearButton;