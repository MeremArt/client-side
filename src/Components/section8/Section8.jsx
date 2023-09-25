import React from 'react'
import './section8.css'
import { Button } from '../button/button'
import { Link } from 'react-router-dom'

const Section8 = () => {
  return (
    <div className="eight_section">
        <div className="vodo">
            <h3>Ready to get started</h3>
            <p className='des'>With our platform, you can effortlessly send and receive payments across borders, enabling you to explore new markets and seize <br />
            international opportunities, don't let borders hold you back any longer. It's time to break free and experience the power of seamless <br />
            cross-border transactions.</p>

            <p className='fyt'>
            With our platform, you can effortlessly send and receive payments across borders, enabling you to explore new markets and seize
            international opportunities, don't let borders hold you back any longer. It's time to break free and experience the power of seamless 
            cross-border transactions.
            </p>
            <Link to='signup'>
            <Button value='Join Hyve'/> 
            </Link> 
        </div>
    </div>
  )
}

export default Section8