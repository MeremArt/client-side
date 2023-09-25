import React from 'react'
import './section7.css'
import video4 from '../../assets/video4.mp4'


const Section7 = () => {
  return (
    <div className="seventh_section">
        <div className="seventh_video">
            <div className="video7">
                <video autoPlay loop muted className="background-video">
                    <source src={video4} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="seventh_text">
            <h3>It takes Less than a minute</h3>
            <div className="num1">
                <div className="fit">
                    <p>01</p>
                    <div className="hol-line"></div>
                </div>
                <div className="fit_text">
                    <p className='crete'>Create an account</p>
                    <p className='txtx'>Create a Hyve account by signing up either with your email address <br /> and password</p>
                </div>
            </div>
            <div className="num1">
            <div className="fit">
                    <p>02</p>
                    <div className="hol-line"></div>
                </div>
                <div className="fit_text">
                    <p className='crete'>Boost account security with 2FA</p>
                    <p className='txtx'>Your security is our priority, set up your 2-factor authentication in a <br /> swoop</p>
                </div>
            </div>
            <div className="num1">
            <div className="fit">
                    <p>03</p>
                </div>
                <div className="fit_text">
                    <p className='crete'>You're all set to transact</p>
                    <p className='txtx'>Now you’re ready for a smooth ride with us</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Section7