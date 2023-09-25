import React from "react";

const DepositInput = ({ width, height, value }) => {
  const inputStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="inputbox" style={{height: height, width: width}}>
  <input type="text" style={inputStyle} value={value} readOnly placeholder='Exchange value'/>
    </div>
  )
};

export default DepositInput;