import React, { useContext } from 'react'
import './seebankdetails.css'
import { Button } from '../button/button'
import { UserContext } from '../../Context/Context'
import axios from 'axios'
import { useEffect } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import { ArrowLeft } from 'iconsax-react'
import { HambergerMenu } from 'iconsax-react'


const Seebankdetails = ({onNext,handleGoBack}) => {
    const {amount,setAmount,get_user ,loading,setLoading, userId,toggleMenu} =useContext(UserContext);
    console.log(amount)
    console.log(userId)


    const depositId = localStorage.getItem('userID')
    console.log(depositId)

    const handleDeposit = async () =>{
        setLoading(true)
        const params = {
            amount
        };
        try{
            const response = await axios.post(`https://hyve-finance-demo.onrender.com/api/v1/transactions/${depositId}/deposits`,params)
            console.log(response)
            if(response){
                await get_user(userId)
                
            }
            setLoading(false)
            onNext()
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    // useEffect(()=>{
        // handleDeposit()
    // },[])

  return (
    <div className="bank-details">
            <button onClick={handleGoBack} className="go_back_textt">
            <p><ArrowLeft size="17" color="#073374"/></p> 
            <p className='goback'>Go to previous</p>
            </button>
        <div className="bank-details-body">
        <div onClick={handleGoBack} className="bread-crum go-back-contt" >
        <div  className='mobile-go-back'>
          <p><ArrowLeft size="17" color="#073374"/></p> 
          <p className='goback'>Go to previous</p>
        </div>
        <HambergerMenu size="30" color="#575656" onClick={toggleMenu}/>
          </div>
            <div className="bank-details-header">
                <p className='amount-pay'>Amount to pay</p>
                <p className='amount-fig'>{amount} NGN</p>
            </div>

            <div className="pay-account">
                <p>Pay into this account</p>
            </div>

            <div className="main-details">
                <div className="account-num">
                    <p>Account Number</p>
                    <p>0024515455</p>
                </div>
                <div className="account-num">
                    <p>Bank</p>
                    <p>Access Bank</p>
                </div>
                <div className="account-num">
                    <p>Account Name</p>
                    <p>Hyve Finance</p>
                </div>
            </div>

            <div className="checkbox">
                <input type="checkbox" />
                <p>I have made payment</p>
            </div>

            <Button value={loading ? <CircularProgress style={{ color: "#000" }} size={23} /> : 'Confirm Payment'} onClick={()=>{
                handleDeposit()
                // onNext()
            }}/>

        </div>
    </div>
  )
}

export default Seebankdetails