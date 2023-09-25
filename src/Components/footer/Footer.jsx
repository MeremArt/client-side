import React from 'react'
import './footer.css'
import logoLandingPage from '../../assets/logoLandingPage.svg'
import { Button } from '../button/button'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="contain">
        <div className="footer-content">
        <div className="footer-sectionn">
            <div className="footer_logo">
                <img src={logoLandingPage} alt="SVG" style={{ width: '90px'}} />
            </div>
            <p className='fin'>Live beyond borders</p>
            <Link to='signup'>
            <Button value='Create Account'/>
            </Link>
          </div>
          <div className="footer-section">
            <div className="pun"></div>
            <p>Home</p>
            <p>Features</p>
            <p>How it works</p>
            <p>Help</p>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
          <div className="footer-section">
            <h2>Company</h2>
            <Link to='login'>
              <p>Login</p>
            </Link>
            <Link to='signup'>
            <p>Sign up</p>
            </Link>
            <p>FAQs</p>
            <p>Privacy and policy</p>
            <p>Terms and conditions</p>
          </div>
          <div className="footer-section">
            <h2>About Us</h2>
            <p>Administration</p>
            <p>Technical team</p>
          </div>
          
        </div>
        
      </div>
        <div className="footer-bottom">
            <div className="bozol">
                <p>&copy; {new Date().getFullYear()} Hyve | Powered by Learnable.</p>
            </div>
        </div>
    </footer>  )
}

export default Footer