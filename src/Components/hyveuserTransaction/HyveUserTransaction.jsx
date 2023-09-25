import React, {useState, useContext} from 'react'
import './hyveusertransaction.css'
import { Button } from '../button/button'
import { CircularProgress } from '@mui/material';
import { UserContext } from '../../Context/Context';
import axios from 'axios';
import PaymentConfirm from '../paymentConfirm.jsx/PaymentConfirm';
import { ArrowLeft } from 'iconsax-react';

const HyveUserTransaction = ({onNext,handleGoBack}) => {

    // const [isLoading, setIsLoading] = useState(false);

    const {loading, setLoading, sendHyve,setSendHyve,sendInput,setSendInput,userId,receiverName, userData} = useContext(UserContext)
    const amount = sendInput * 730
    const receiverId = sendHyve

    let userId2 = localStorage.getItem('userID')
    console.log('localstorage',userId2)

    const handleSending = async() => {
        let data ={
            amount,
            receiverId
        }
        setLoading(true);
        try{
            const response =await axios.post(`https://hyve-finance-demo.onrender.com/api/v1/transactions/send/${userId2}`,data)
            console.log(response)
            setLoading(false)
            onNext(<PaymentConfirm/>)
        } catch(error){
            console.log(error)
            setLoading(false)
        }

      };

  return (
    <>
        <button onClick={handleGoBack} className="go_back_text">
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </button>
    <div className="bank-details">
        <div className="bank-details-bodyy">
            <div className="transHeader">
                <h3>Transaction Summary</h3>
                <p>Ensure the details your input are correct</p>
            </div>

            <div className="yourSending">
                <p>You're sending</p>
                <h3>{sendInput} USDT</h3>
            </div>

            <div className="transdetails">
                <div className="transname">
                    <p className='pop'>Recipient's Name</p>
                    <p className='sup'>{receiverName}</p>
                </div>
                <div className="transname">
                    <p className='pop'>User's ID</p>
                    <p className='sup'> {sendHyve} </p>
                </div>
                <div className="transname">
                    <p className='pop'>Reference code</p>
                    <p className='sup'>23456789jgh</p>
                </div>
            </div>

            <div className="transbutton">
                <Button value={loading ? (
                    <CircularProgress style ={{color: '#000'}} size={23}/>
                    ) : (
                        "Make Payment"
                    )
                } onClick={handleSending}/>
            </div>
        </div>
    </div>
    </>

  )
}

export default HyveUserTransaction