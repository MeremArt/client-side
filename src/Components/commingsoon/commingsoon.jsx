import React from 'react'
import './commingsoon'
import Bumble from '../../assets/bumble.png'
import { Button } from '../button/button'
import { Link } from 'react-router-dom'

const Commingsoon = () => {
  return (
    <div>
      <div className='commingsoon-container'>
        <img src={Bumble} alt="Bumble image" />
      </div>
      <h3>
        Coming Soon
      </h3>
      <p>
        We are currently in private testing but, you <br /> can contact customer support
      </p>
      <Link to='/dashboard'>
      <div className='commingsoon-btn'>
        <Button value='Back To Dashboard'/>
      </div>
      </Link>
    </div>
  )
}

export default Commingsoon