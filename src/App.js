import React, { useState } from 'react';
import './App.css';  // Make sure to save the CSS in a file named "Calculator.css"

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((num, index) => (
          <button 
            key={index}
            className="num-button"
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}
        {['+', '-', '*', '/', '='].map((op, index) => (
          <button 
            key={index} 
            className={op === '=' ? "equal-button" : "op-button"}
            onClick={() => op === '=' ? handleEvaluate() : handleClick(op)}
          >
            {op}
          </button>
        ))}
        <button className="clear-button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;;
