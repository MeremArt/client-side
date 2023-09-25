import React from 'react'
import { AuthLayout } from '../../layouts'
import Commingsoon from '../../Components/commingsoon/commingsoon'

const Receive = () => {
  return (
    <AuthLayout>
        <div className='soonpage'>
            <p className='soonpage-title'>Receive</p>
            <div className='commingsoon'>
            <Commingsoon/>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Receive