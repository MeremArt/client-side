import React from 'react'
import withdrawalicon from '../../assets/withdrawalicon.png'

const Withdrawaltopsection = ({dataLength}) => {
  return (
    <>
    <div className='topsection-container'>
    <div className='topsection'>
        <div>
            <img src={withdrawalicon} alt="Icon" />
        </div>
        <div className='totaldeposit'>
            <h5 >
                N2,300,000
            </h5>
            <p>
            Total Amount Withdrawn
            </p> 
        </div>
    </div>
    <div className='topsection'>
        <div className='totaldeposit'>
            <h5 >
               {dataLength}
            </h5>
            <p>
            Total Number of Withdrawal
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

export default Withdrawaltopsection