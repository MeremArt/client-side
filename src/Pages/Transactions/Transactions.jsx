import React, { useContext } from 'react'
import './transaction.css'
import userhyve from '../../assets/userhyve.png';
import otherwallets from '../../assets/otherwallets.png';
import { ArrowLeft } from 'iconsax-react'
import { Link } from 'react-router-dom';
import { HambergerMenu } from 'iconsax-react';
import { UserContext } from '../../Context/Context';



const Transactions = ({ onNext }) => {

  const{toggleMenu} = useContext(UserContext)
  return (
    <div className="deposit-bodyy">
        <Link to='/dashboard' className="go_back_text">
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </Link>
    
        <div className="surround">
          <div className="deposit-body-contt">
              <h3 className='mode-pay-h3'>Choose recipient</h3>
              <div className="mode-pay-boxx">
                <div className="mode-pay">
                  <div className="box1" onClick={onNext}>
                        <img src={userhyve} alt="userhyve" />
                        <p>Send to Hyve user</p>
                    </div>
                    <div className="alt-box">
                    <div className="box1">
                        <img src={otherwallets} alt="otherwallets" />
                        <p>Send to other wallets</p>
                    </div>
                        <p>Coming soon ...</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>

  )
}

export default Transactions