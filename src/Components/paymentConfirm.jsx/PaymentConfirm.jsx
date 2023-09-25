import React, {useContext, useState} from 'react'
import './paymentConfirm.css'
import { TickCircle } from 'iconsax-react'
import { Button } from '../button/button'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/Context'


const PaymentConfirm = () => {

    const {receiverName,sendHyve,sendInput} = useContext(UserContext)

    const navigate = useNavigate()

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //   setIsModalOpen(true);
    // };
    
    // const closeModal = () => {
    //   setIsModalOpen(false);
    // };
  
  return (
    <div className="payCon-body">
        {/* <div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h1>Modal Content</h1>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div> */}
        <div className="payCon-cont">
            <div className="payCon-circle">
                <TickCircle size="75" color="#325D9E" variant="Bold"/>            
            </div>

            <div className="payCon-header">
                <h3>Payment Successful</h3>
                <p>Your payment has been successfully done</p>
            </div>

            <div className="payCon-details">
                <div className="payCon-details-header">
                    <p>Total Payment</p>
                    <h3>{sendInput} USDT</h3>
                </div>

                <div className="payCon-details-details">
                    <div className="headd">
                        <h3>Recipient's Name</h3>
                        <p>{receiverName}</p>
                    </div>
                    <div className="headd">
                        <h3>User's ID</h3>
                        <p>{sendHyve}</p>
                    </div>
                    <div className="headd">
                        <h3>Reference code</h3>
                        <p>23456789jgh</p>
                    </div>
                </div>

                <Link to='/dashboard' className="payCon-button">
                    <Button value='Go Home'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PaymentConfirm