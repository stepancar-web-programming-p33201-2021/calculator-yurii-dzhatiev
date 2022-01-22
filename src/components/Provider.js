import React, { useState } from 'react';

export const NumberContext = React.createContext();

const Provider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const setStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const clearCalcValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      setStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        clearCalcValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        setStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default Provider;