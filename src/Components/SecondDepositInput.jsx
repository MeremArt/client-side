import React from 'react'

const SecondDepositInput = ({ value, height, width, border, padding }) => {
  return (
    <div>
        <input type="text" value={value} readOnly 
          style={{ height, width, border, padding }}
        />
    </div>
  )
}

export default SecondDepositInput