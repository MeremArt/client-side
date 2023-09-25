import React from 'react'
import Inputfieldbox from '../inputfieldbox'
import { Button } from '../button/button'
import './withdrawaldetails.css'

const Withdrawaldetails = ({setbankName,setAccountNumber,setAccountName,onNext}) => {

    const handleInputValue1 = (e)=>{
        setAccountNumber(e.target.value)
    }
    const handleInputValue2 = (e)=>{
        setAccountName(e.target.value)
    }
    const handleInputValue3 = (e)=>{
        setbankName(e.target.value)
    }
     
  return (
    <div className='withdrawcontainer' >
        <div className='detailscontainer'>
        <h2>
        Withdrawal Details
        </h2>
        <p>Input the details of your local bank your money will be withdrawn into</p>
        <div className='withdrawinput'>
        <div>
            <label>Account Number</label>
            <Inputfieldbox
            width="100%"
            height="45px"
            placeholder="Input  local account number"
            onChange={handleInputValue1}
            />
        </div>
        <div>
            <label>Account Name</label>
            <Inputfieldbox
            width="100%"
            height="45px"
            placeholder="Input the name on the local account"
            onChange={handleInputValue2}
            />
        </div>
        <div>
            <label>Bank Name</label>
            <Inputfieldbox
            width="100%"
            height="45px"
            placeholder="Input the name of your local bank"
            onChange={handleInputValue3}
            />
        </div>
        </div>
        <div className='withdrawbuttons'>
            <Button value='Proceed to Payment' onClick={()=>{
                onNext()
            }}/>
        </div>
        </div>
    </div>
  )
}

export default Withdrawaldetails