import React,{useState} from 'react'
import './altInput.css'
import Select from '../select/select';




const AltInput = ({options=[], height, width, value, onChange}) => {
    const[ setValue] = useState('');

  return (
    
    <div className="inputbox" style={{height: height, width: width}}>
        <input type="number" value={value} onChange={onChange} placeholder='Enter amount' required/>
        <Select options={options}/>
    </div>
  )
}

export default AltInput