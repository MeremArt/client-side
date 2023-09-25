import React, { useState } from 'react';
import './makePayment.css';
import AltInput from '../altInput/altInput';
import { options } from '../../Pages/deposit/deposit';
import DepositInput from '../depositInput';
import { Button } from '../button/button';
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';
import { ArrowLeft } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { HambergerMenu } from 'iconsax-react';

const MakePayment = ({ onNext, handleGoBack }) => {
  const [nairaValue, setNairaValue] = useState('');
  const [input, setInput] = useState('');
  const { amount, setAmount ,toggleMenu} = useContext(UserContext);

  const usdtExchange = 1 / 730;

  const handleNairaChangee = (e) => {
    const inputValue = e.target.value;
    if (inputValue < 1 || isNaN(inputValue)) {
      setInput('Please enter a valid amount');
      setInput('')
    } else {
      setInput('');
      setNairaValue(inputValue);
    }
  };

  const usdtValue = parseFloat(nairaValue) * usdtExchange;
  const depositValue = nairaValue !== '' ? `${usdtValue.toFixed(2)} USDT` : '0 USDT';

  const getId = () => {
    let depositId = localStorage.getItem('userID');
    console.log(depositId);
    // setAmount(nairaValue)
  };

  console.log(amount);
  const navigate = useNavigate();

  console.log(nairaValue);

  return (
    <div className='makepayment'>
      <button onClick={handleGoBack} className='go_back_textt'>
        <p>
          <ArrowLeft size='17' color='#073374' />
        </p>
        <p className='goback'>Go to previous</p>
      </button>

      <div className='makepaycont'>
      <div onClick={handleGoBack} className="bread-crum go-back-contt" >
        <div  className='mobile-go-back'>
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </div>
        <HambergerMenu size="30" color="#575656" onClick={toggleMenu}/>
          </div>
        <div className='input-fields'>
          <div className='input1'>
            <p>Input the amount you want to deposit</p>
            <AltInput options={options}  height='55px' value={nairaValue} onChange={handleNairaChangee} />
            <p style={{ fontSize: '12px', color: 'red', marginTop: '5px' }}>{input}</p>
          </div>
          <div className='input2'>
            <p>Amount you will receive</p>
            <DepositInput height='55px' label='USDT' value={depositValue} />
          </div>
        </div>

        <div className='depositinputtext'>
          <p>Conversion rates are in line with the commercial rates</p>
        </div>

        <div className='depositsbuttons'>
          <Button
            value='Make payment'
            onClick={() => {
              setAmount(nairaValue);
              getId();
              if (nairaValue !== '' && input === '') {
                onNext();
              } else {
                setInput('Please set amount');
              }
            }}
          />
        </div>
        <div className='depositsbuttons2'>
          <Button value='Cancel' />
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
