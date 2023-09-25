import React, {useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'
import './LandingPageHeader.css'
import logoLandingPage from '../../assets/logoLandingPage.svg'
import { Button } from '../button/button'
import { Link } from 'react-router-dom'
import { HambergerMenu } from 'iconsax-react'
import { CloseCircle } from 'iconsax-react'

const LandingPageHeader = () => {
    const navLinks = [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'Services', url: '/services' },
        { id: 3, title: 'About Us', url: '/about' },
        { id: 4, title: 'Contact Us', url: '/contact' },
      ];

      const [isOpen,setIsOpen] = useState(false)

      const handleOpen = () =>{
        setIsOpen(!isOpen)
      }
      
  return (
    <section className='big__header'>
        <div className="containerr">
            <div className="headerr">
                <div className="logo">
                    <img src={logoLandingPage} alt="SVG" style={{ width: '90px', paddingTop: '10px'}} />
                </div>
                <div className={isOpen ? 'links-container' : 'links-container hidemenu'}>
                <div className='closecircle' onClick={handleOpen}>
                     <CloseCircle/>
                </div>
                <div className="nav__links">
                    <nav>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="nav__buttons">
                    <Link to='login'>
                    <div className="button_1">
                        <Button value='Sign in'/>
                    </div>
                    </Link>
                    <Link to='signup'>
                    <div className="button_2">
                        <Button value= 'Create Account'/>
                    </div>
                    </Link>
                </div>
                </div>
                <div className='menubar' onClick={handleOpen}>
                    <HambergerMenu/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LandingPageHeader