import React , { useState } from 'react'

const Inputfieldbox = ({ height, width, border, padding, placeholder, onChange }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <div>
        <input
            type="text"
            onChange={onChange}
            style={{ height, width, border, padding }}
            placeholder={placeholder}
        />
    </div>
  )
}

export default Inputfieldbox