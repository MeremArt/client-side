import React from 'react'
import './section5.css'
import { TickCircle } from 'iconsax-react'
import video2 from '../../assets/video2.mp4'
import video1 from '../../assets/video1.mp4'

const Section5 = () => {
  return (
    <div className="fifth_section">
      <div className="fifth_section_videos">
        <div className="video1">
          <div className="vid1">
              <video autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
          </div>
        </div>
        <div className="video2">
          <div className="vid2">
              <video autoPlay loop muted >
                <source src={video1} type="video/mp4" />
              </video>
          </div>
        </div>
      </div>
      <div className="fifth_section_text">
        <h3>Your Security is our priority, your <br /> money is safe with us</h3>

        <p className='cup'>We have measures in place to protect your data, money and privacy. As <br />
         a user centric platform we are fully committed to earning your trust</p>

         <p className='cupp'>We have measures in place to protect your data, money and privacy. As 
         a user centric platform we are fully committed to earning your trust</p>

        <div className="the_ticks">
          <span className='tick'>
            <span className='tick_icon'><TickCircle size="20" color="#FF7000" variant="Bold"/></span> 
            <p className='tick_p'>Two-Factor Authentication</p>
          </span>
          <span className='tick'>
            <span className='tick_icon'><TickCircle size="20" color="#FF7000" variant="Bold"/></span> 
            <p className='tick_p'>Guaranteed Transaction Security</p>
          </span>
          <span className='tick'>
            <span className='tick_icon'><TickCircle size="20" color="#FF7000" variant="Bold"/></span> 
            <p className='tick_p'>Secure Cloud Option</p>
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default Section5