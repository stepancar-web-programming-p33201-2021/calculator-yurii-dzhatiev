import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="orange-button" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;