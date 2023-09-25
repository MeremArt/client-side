import React from 'react'
import { AuthLayout } from '../../layouts'
import './account.css'
import Commingsoon from '../../Components/commingsoon/commingsoon'

const Account = () => {
  return (
    <AuthLayout>
        <div className='soonpage'>
      <p className='soonpage-title'>Account</p>
      <div className='commingsoon'>
        <Commingsoon/>
      </div>
      </div>
    </AuthLayout>
  )
}

export default Account