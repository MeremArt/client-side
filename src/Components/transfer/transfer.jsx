import React, { useContext } from 'react'
import './transfer.css'
import house from '../../assets/house.png';
import coin from '../../assets/coin.png';
import atm from '../../assets/atm.png';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react'
import { UserContext } from '../../Context/Context';
import { HambergerMenu } from 'iconsax-react';



const Transfer = ({ onNext,onNext2,style }) => {
    const {toggleMenu } = useContext(UserContext)
  return (
    <div className="deposit-body" >
        <Link to='/dashboard' className="go_back_textt">
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </Link>

        <div className="surround">
        <div className="deposit-body-cont">
        <div className="bread-crum go-back-contt" >
        <Link to='/dashboard' className='mobile-go-back'>
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </Link>
        <HambergerMenu size="30" color="#575656" onClick={toggleMenu}/>
          </div>
            <h3 className='mode-pay-h3'>Select mode of payment</h3>
            <p className='mode-pay-p'>Choose a mode of payment you are comfortable with</p>
            <div className="mode-pay-box">
                <div className="box1" onClick={onNext}>
                    <img src={house} alt="house" />
                    <p>Pay with bank transfer</p>
                </div>
                <div className="box1" onClick={onNext2} >
                    <img src={coin} alt="coin" />
                    <p>Pay with crypto</p>
                </div>
                <div className="alt-box">
                    <div className="box1">
                        <img src={atm} alt="atm" />
                        <p>Pay with card</p>
                    </div> 
                    <p>Coming soon ...</p>
                </div>
            </div>
        </div>

        </div>
    </div>

  )
}

export default Transfer