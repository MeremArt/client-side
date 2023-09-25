import React from 'react'
import './topsection.css'
import Depositicon from '../../assets/depositicon.png'
const Topsection = ({dataLength}) => {
  return (
    <>
    <div className='topsection-container'>
    <div className='topsection'>
        <div>
            <img src={Depositicon} alt="Icon" />
        </div>
        <div className='totaldeposit'>
            <h5 >
                N2,300,000
            </h5>
            <p>
              Total Amount Deposited
            </p> 
        </div>
    </div>
    <div className='topsection'>
        <div className='totaldeposit'>
            <h5 >
               {dataLength}
            </h5>
            <p>
              Total Number of Deposits
            </p> 
        </div>
    </div >
    <div className='topsection'>
    <div className='totaldeposit'>
            <p>
              Daily Deposits
            </p> 
        </div>
    </div>
    </div>
    </>
  )
}

export default Topsection