import React from 'react';
import './InputBar.css';

const InputBar = ({ value, setValue, placeholder }) => {
  return (
    <input
      className="input-bar"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputBar;