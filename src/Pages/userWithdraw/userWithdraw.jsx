import React, {useContext, useState} from 'react'
import './userWithdraw.css'
import { AuthLayout } from '../../layouts'
import AltInput from '../../Components/altInput/altInput'
import DepositInput from '../../Components/depositInput'
import { Button } from '../../Components'
import Transactionsummary from '../../Components/Transactionsummary/Transactionsummary'
import { UserContext } from '../../Context/Context'
import { HambergerMenu, ArrowLeft} from 'iconsax-react'
import Withdrawaldetails from '../../Components/withdrawaldetails/withdrawaldetails'
import { Link } from 'react-router-dom'

const UserWithdraw = () => {

  const [activeComponent, setActiveComponent] = useState(0);
  const [amount, setAmount] = useState(0)
  const {userData,toggleMenu} = useContext(UserContext)
  const [input, setInput] = useState('')

  const options = [
    { value: 'USDT', label: 'USDT' },
  ];
  const[accountNumber,setAccountNumber]= useState(0)
  const[accountName,setAccountName]= useState('')
  const[bankName,setbankName]= useState('')

  const handleWithdrawValue = (e) => {
    const value = e.target.value;
    setAmount(value);
    setInput('');
  
    if (value < 0) {
      setInput('Withdrawal amount cannot be negative');
    }
  };
  

  const handleNextComponent = () => {
    if (amount <= 5) {
      setInput('Minimum amount to be withdrawn is 5 USDT');
    } else {
      setActiveComponent(activeComponent + 1);
    }
  };
  
  const usdtValue = ( 1 / 730)
  const userBalance = userData && (userData.balance * usdtValue).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const exchangeValue = (amount / usdtValue )!== '' ? `${((amount / usdtValue).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NGN` : '0 NGN';
  const exchangeValue2 = (amount / usdtValue )
  return (
    <AuthLayout>
        <div className='withdraw '>
       
          <div className= {activeComponent === 0 ? 'withdrawcontainer': 'withdrawcontainer hide '} >
          <div className="bread-crum go-back-contt" >
        <Link to='/dashboard' className='mobile-go-back'>
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </Link>
        <HambergerMenu size="30" color="#575656" onClick={toggleMenu}/>
          </div>
            <div className='availablebalance'>
              <p>
                Your available wallet balance
              </p>
              <h5>
                {userBalance} USDT
              </h5>
            </div>
            <div className="input-fields withdraw-inputfield">
                <div className="input1">
                    <p>Input the  amount you want to withdraw</p>
                    <AltInput options={options}  width='320px' height='55px' onChange={handleWithdrawValue} />
                    <p style={{fontSize:'12px', color:'red',marginTop:'5px'}}>{input}</p>
                    
                </div>
                <div className="input2">
                    <p>Amount you will receive</p>
                    <DepositInput width="320px" height="55px" label="USDT"  value={exchangeValue}/>
                </div>
            </div>
            <div className='withdrawbuttons'>
              <Button value='Request Payment' onClick={()=>{
                console.log(exchangeValue)
                if (exchangeValue > (userData && userData.balance)){
                  setInput('Insufficient balance')
                } else if(amount == ''){
                  setInput('Please set amount')
                } else{
                  handleNextComponent()
                }
              }}/>
            </div>
            </div>
           {activeComponent ===1 && <Withdrawaldetails setAccountNumber={setAccountNumber} setAccountName={setAccountName} setbankName={setbankName} onNext={handleNextComponent} />} 
           {activeComponent === 2 && <Transactionsummary onNext={handleNextComponent} amount={amount} accountNumber={accountNumber} bankName={bankName} accountName={accountName} exchangeValue={exchangeValue2} />} 
           {console.log(activeComponent)}

          </div>
    </AuthLayout>
  )
}

export default UserWithdraw