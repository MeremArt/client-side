import React from 'react'
import AltInput from '../altInput/altInput'
import DepositInput from '../depositInput'
import { options } from '../../Pages/deposit/deposit'
import { Button } from '../button/button'
import './paywithcrypto.css'

const Paywithcrypto = ({onNext2,handleGoBack2}) => {
  return (
    <>
    {/* <Link to='/deposit'>  */}
    <button className="go_back_textt">
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
    </button>
    {/* </Link> */}
    <div className='cryptopayment-container'>
       <div className="input-fields">
          <div className="input1">
              <p>Input the  amount you want to deposit</p>
              <AltInput options={options} width='320px' height='55px'/>
              {/* <p style={{fontSize:'12px', color:'red',marginTop:'5px'}}>{input}</p> */}
          </div>
          <div className="input2">
              <p>Amount you will receive</p>
              <DepositInput width="320px" height="55px" label="USDT"  />
          </div>
        </div>

        <div className="depositinputtext">
          <p>Conversion rates are in line with the commercial rates</p>
        </div>
        <div className='cryptobtn' >
          <Button value='Connect Wallet' onClick={onNext2}/>
   
          
        </div>
    </div>
    </>
  )
}

export default Paywithcrypto