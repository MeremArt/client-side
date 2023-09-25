import React from 'react'
import { TickCircle } from 'iconsax-react'
import { Button } from '../button/button'
import { Link } from 'react-router-dom'


const Cryptoconfirmation = () => {
  return (
    <div className='cryptoconfirm'>
        <TickCircle size="75" color="#325D9E" variant="Bold"/>
        <h5>Payment Successful</h5>
        <p>Your account has been funded</p>
        <Link to='/dashboard' className='cryptoconfirm-btn'>
            <Button value='Go Home'/>
        </Link>
    </div>
  )
}

export default Cryptoconfirmation