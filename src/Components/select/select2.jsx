import React, { useState } from 'react';
import './select2.css';

const Select = ({ options = [] }) => {
  const [selectedOption, setSelectedOption] = useState('volvo');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select className='selectOption' value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
