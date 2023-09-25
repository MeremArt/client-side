import React from 'react'
import './section2.css'
import clock from '../../assets/clock.png'
import padlock from '../../assets/padlock.png'
import shield from '../../assets/shield.png'

const Section2 = () => {
  return (
    <div className="second_section">
        <div className="second_section_header">
            <h3>Why choose Hyve Finance</h3>
            <p>We are transforming the cross border remittance space using blockchain innovation for fast, secure, and cost- <br />
             effective cross-border transactions</p>
        </div>

        <div className="choose_section">
            <div className="choose1">
                <div className="choose_circle">
                    <img src={clock} alt="clock" />
                </div>
                <h3 className='fast'>Fast</h3>
                <p>Experience seamless transactions, which bridges <br />
                 the wide gap between different currencies and <br />
                  financial systems across the world.</p>
            </div>
            <div className="choose1">
            <div className="choose_circle">
                <img src={padlock} alt="padlock" />
            </div>
                <h3 className='safe'>Safe</h3>
                <p>Your funds are securely transferred using <br />
                 cryptographic protocols, providing you with  <br />
                  the peace of mind you deserve.</p>
            </div>
            <div className="choose1 ">
            <div className="choose_circle">
                <img src={shield} alt="shield" />
            </div>
                <h3 className='transp'>Transparent</h3>
                <p>Each transfer is recorded on the blockchain, <br />
                 creating an immutable and auditable trail of <br />
                  the funds' journey. </p>
            </div>
        </div>
    </div>
  )
}

export default Section2