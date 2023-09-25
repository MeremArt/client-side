import React,{useState} from 'react'
import './altInput.css'
import Select2 from '../select/select2';




const AltInput = ({options=[], height, width, value, onChange}) => {
    const[ setValue] = useState('');

  return (
    
    <div className="inputbox" style={{height: height, width: width}}>
        <input type="number" value={value} onChange={onChange} placeholder='Input the amount you want to send' required/>
        <Select2 options={options}/>
    </div>
  )
}

export default AltInput