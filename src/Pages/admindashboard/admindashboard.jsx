import React, { useContext,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import { AuthLayout } from '../../layouts'
import Overview from '../Overview/Overview'
import Withdrawal from '../Withdrawal/Withdrawal'
import { useLocation, useNavigate } from 'react-router-dom'
import './admindashboard.css'
import { UserContext } from '../../Context/Context'


const Admindashboard = () => {

  const {get_user,u} = useContext(UserContext)
  useEffect(()=>{
    const id = setInterval(() => { 
       get_user()
     }, 10000);
     return ()=> clearInterval(id)
   },[])

  const { pathname } = useLocation()

  return (
    <div className='admindashboard'>
        <AuthLayout>
          { pathname === '/admin' ?
            <Overview/>
            :
            <Outlet/>
          }
    </AuthLayout>
    </div>
  )
}

export default Admindashboard