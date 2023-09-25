import React, { useContext, useState } from 'react';
import './hyveuser.css';
import Inputfieldbox from '../inputfieldbox';
import { Button } from '../button/button';
import { UserContext } from '../../Context/Context';
import { CircularProgress } from '@mui/material';
import { ArrowLeft } from 'iconsax-react';
import axios from 'axios';
import AltInput2 from '../altInput/altinput2';

const options = [
  { value: 'USDT', label: 'USDT' }
];

const Hyveuser = ({ onNext, handleGoBack }) => {
  const { sendInput, setSendInput, loading, setLoading, receiverName, setReceiverName, userData } = useContext(
    UserContext
  );
  const { sendHyve, setSendHyve } = useContext(UserContext);
  const [input, setInput] = useState('');
  const [hyveInput, setHyveInput] = useState('');
  const [hyveError, setHyveError] = useState('');

  const balance = userData && userData.balance;

  const handleHyve = (e) => {
    setSendHyve(e.target.value);
    console.log('sendhyveee', sendHyve);
    console.log(sendHyve);
    setHyveInput('');
    setHyveError('')
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setSendInput(value);
      setInput('');
    } else {
      setInput('Please enter a valid number');
    }
  };

  const getReceiverName = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://hyve-finance-demo.onrender.com/api/v1/users/hyve/${sendHyve}`);
      console.log(response);
      setReceiverName(response.data.name);
      setLoading(false);
      onNext();
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.response.status === 404){
        setHyveError(error.response.data.message)
      }
    }
  };

  const confirmTransaction = () => {
    const paymentAmount = parseFloat(sendInput);

    if (sendInput === '') {
      setInput('Please set the amount');
    } else if (isNaN(paymentAmount)) {
      setInput('Please enter a valid number');
    } else if (sendHyve === '') {
      setHyveInput('Please set hyve ID');
    } else if (paymentAmount < 1) {
      setInput('Please enter a valid amount');
      console.log('Enter valid amount');
    } else if (paymentAmount * 730 <= balance) {
      // Payment amount is valid, proceed with the transaction
      getReceiverName();
    } else if (paymentAmount * 730 > balance) {
      setInput('Insufficient balance');
    }
    
  };

  return (
    <>
      <button onClick={handleGoBack} className="go_back_text">
        <p>
          <ArrowLeft size="17" color="#073374" />
        </p>
        <p className="goback">Go to previous</p>
      </button>
      <div className="makepayment">
        <div className="makepaycontt">
          <h3>Payment Details</h3>
          <p>Input receiver's payment details</p>
          <div className="input-fieldss">
            <div className="inputfeild1">
              <p>Hyve User ID</p>
              <Inputfieldbox
                width="65%"
                height="45px"
                placeholder="Input User's ID"
                onChange={handleHyve}
              />
              <p style={{ fontSize: '12px', color: 'red', marginTop: '5px' }}>{hyveInput}</p>
              <p style={{ fontSize: '12px', color: 'red', marginTop: '5px' }}>{hyveError}</p>
            </div>
            <div className="spacerr"></div>
            <div className="inputfeild1">
              <p>Payment Amount</p>
              <Inputfieldbox
                width="65%"
                height="45px"
                placeholder="Input the amount you want to send"
                onChange={handleInput}
              />
              <p style={{ fontSize: '12px', color: 'red', marginTop: '5px' }}>{input}</p>
            </div>
            <div className="forbutton">
              <Button
                value={
                  loading ? (
                    <CircularProgress style={{ color: '#000' }} size={23} />
                  ) : (
                    'Confirm Details'
                  )
                }
                onClick={confirmTransaction}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hyveuser;
