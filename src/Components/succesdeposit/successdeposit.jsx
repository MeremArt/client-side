import React from 'react'
import './successdeposit.css'
import { TickCircle } from 'iconsax-react'
import { Button } from '../button/button'
import { useNavigate } from 'react-router-dom'


const Successdeposit = () => {
    const navigate = useNavigate()

  return (
    <div className='successScreen'>
        <div className="successbody">
            <div className="successicon">
                <TickCircle size="70" color="#325D9E" variant="Bold"/>
            </div>

            <div className="successtext">
                <p className='paytext'>Payment Successful</p>
                <p className='timer'>Your Transaction is being proccessed</p>
            </div>

            <div className="successbutton">
                <Button value='Go to dashboard' onClick={()=>{
                    navigate('/dashboard')
                }}/>
            </div>
        </div>
    </div>
  )
}

export default Successdeposit