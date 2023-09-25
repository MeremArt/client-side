import React, { useContext, useEffect, useState } from 'react'
import './Transactionsummary.css'
import { Button } from '../button/button'
import Transactionmodal from './Transactionmodal'
import { UserContext } from '../../Context/Context'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { HambergerMenu, ArrowLeft } from 'iconsax-react'

const Transactionsummary = ({onNext,amount,exchangeValue,bankName,accountName,accountNumber}) => {

  const [fee,setFee] = useState(.25)
  const [total,setTotal] = useState()
  const {userId,loading,setLoading,userData,toggleMenu} = useContext(UserContext)
  
  // useEffect(()=>{
  //   const sum =()=>{
  //     const result = amount + fee
  //     setTotal(result)
  //   }
  //   sum()
  // },[amount])

  // const result = amount + fee
  // console.log(result)

  const [isModalOpen,setIsModalOpen]  =useState(false)
  const usdtConvert = 730
  const transactionFee = 100

  let userId2 = localStorage.getItem('userID')
  console.log(userId2)


  const openModal =()=>{
    setIsModalOpen(true)
  }
  const closeModal =()=>{
    setIsModalOpen(false)
  }

  const requestPayment =async()=>{
    let data = {
        "amount" : exchangeValue,
        "accountName": accountName,
        "accountNumber":accountNumber,
        "bankName": bankName
    }
    setLoading(true)
    try{
      const response = await axios.post(`https://hyve-finance-demo.onrender.com/api/v1/transactions/${userId2}/withdrawals`,data)
      console.log(response)
      setLoading(false)
      openModal()
    }
    catch(error){
        console.log(error)
        setLoading(false)
    }
  }

  console.log(bankName)
  console.log(accountName)
  console.log(accountNumber)

  return (
    <>
    <div className='transactsum-container'>
    {/* <div  className="bread-crum go-back-contt" >
        <div  className='mobile-go-back'>
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </div>
        <HambergerMenu size="30" color="#575656" onClick={toggleMenu}/>
          </div> */}
      <div className='transactsum'>
        <h5>
        Transaction  Summary
        </h5>
        <p>
        Details of your withdrawal transaction request
        </p>
      </div>
      <div className='transact-amount'>
        <p>
        You’re  withdrawing
        </p>
        <h5>
        {amount} USDT
        </h5>
      </div>
        <span className='charges'>
        Charges cover bank taxes for withdrawals
        </span>
        <div className='transact-details'>
          <div className='detail' >
            <p>
            Recipient’s Name
            </p>
            <p>
            {accountName}
            </p>
          </div>
          <div  className='detail'>
            <p>
            Amount
            </p>
            <p>
           {amount} USDT
            </p>
          </div>
          <div  className='detail'>
            <p>
            Transaction Fee
            </p>
            <p>
            {transactionFee} NGN
            </p>
          </div>

          <div className='detail amountpay' >
            <p>
            Amount to pay
            </p>
            <p>
            {((amount * usdtConvert) + transactionFee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NGN
            </p>
          </div>
        </div>
        <div  className='summarybutton'>
          <Button  value={
            loading ? (
              <CircularProgress style={{ color: "#000" }} size={23} />
              ) : (
                "Payout"
                )
          } onClick={()=>{
            // openModal()
            requestPayment()
          }}/>
        </div>
    </div>
        
        { isModalOpen &&
          <div className='modal'>
        <div  className='transactmodal'>
        <h5>
        Withdrawal Request Successful
        </h5>
        <p>
        Your withdrawal request has been received and is being processed, you will be notified when payout is made
        </p>
        <Link  to='/dashboard' className='modalbutton'>
        <Button value='Go Home'/>
        </Link>
      </div>
        </div>
        }
    </>
  )
}

export default Transactionsummary