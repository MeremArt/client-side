import React from 'react'
import { AuthLayout } from '../../layouts'
import './settings.css'
import Commingsoon from '../../Components/commingsoon/commingsoon'

const Settings = () => {
  return (
    <AuthLayout>  
    <div className='soonpage'>
    <p className='soonpage-title'>Settings</p>
    <div className='commingsoon'>
      <Commingsoon/>
    </div>
    </div>
    </AuthLayout>
  )
}

export default Settings