import React from 'react'
import HyveLogo from '../../assets/HyveLogo.png'
import { Button } from '../../Components'
import { Link } from 'react-router-dom'
import './pagenotfound.css'
import Img404 from '../../assets/404img.png'

const Pagenotfound = () => {
  return (
    <>
    <div className='pagenotfound-container'>

        <div className='pagenotfound-logo'>
            <img src={HyveLogo} alt="Hyvelogo" />
        </div>
        <div className='pagenotfound'>
            <div className='pagenotfound-text' >
                <h2>
                    Oops!
                </h2>
                <p className='notfound-msg1'>
                    This page cannot be found
                </p>
                <p className='notfound-msg2'>
                    Sorry, the page you are looking for is not available. <br/> Don’t worry, everything is still awesome! You can return <br/> to homepage.
                </p>
                <Link to='/' className='pagenotfound-btn'>
                    <Button value='Return to Hompage'/>
                </Link>
            </div>
            <div className='img404'>
                <img src={Img404} alt="404 Image" />
            </div>

            </div>
    </div>

    </>
  )
}

export default Pagenotfound