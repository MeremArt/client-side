import React from 'react'

const SecondInput = ({value, height, width, border, padding, onChange}) => {
  return (
    <div>
        <input type="number" value={value} onChange={onChange} 
          style={{ 
            height, width, border, padding,
          'margin': 0,
          }}
        />
    </div>
  )
}

export default SecondInput