import React from 'react'
import './section3.css'
import { Button } from '../button/button'
import dashboardBanner from '../../assets/dashboardBanner.png'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className="third_section">
        <div className="third_section_text">
            <h3 className='balls'>Pushing the boundaries of </h3>
             <h3 className='balls'>innovation to deliver swift and </h3> 
             <h3 className='balls'> instant payment solutions</h3>

             <h3 className='second_balls'>Pushing the boundaries of innovation to deliver swift and instant payment solutions</h3>
             <p className='zom'>Bespoke payment solutions for your modern lifestyle, business <br />
              connections, disbursements, security and payment processing <br /> across the globe</p>

            <p className='dom'>Bespoke payment solutions for your modern lifestyle, business connections, disbursements, security and payment processing across the globe</p>
          <Link to='signup'>
            <div className="third_section_button">
                <Button value= 'Join Hyve'/>
            </div>
          </Link>
        </div>

        <div className="third_section_banner">
            <div className="banner_section"></div>
        </div>
    </div>
  )
}

export default Section3