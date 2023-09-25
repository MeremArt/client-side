
import React, { useEffect, useState } from 'react'
import { AuthLayout } from '../../layouts'
import Withdrawaltopsection from '../../Components/admintopsect/Withdrawaltopsection'
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';
import axios from 'axios';
// import Admintopsect from "../../Components/admintopsect/topsection";
// import "./Withdrawal.css";
// import { allWithdrawal } from "../Data/Withdraw";



const Withdrawal = () => {

  const {allWithdrawal,setAllWithdrawal,loading,setLoading} = useContext(UserContext)
  const [transactionId,setTransactionId] = useState('')


  const getwithdrawals =()=>{
    // setLoading(true)
    axios.get('https://hyve-finance-demo.onrender.com/api/v1/transactions/withdrawals')
    
    .then(response=>{
        setAllWithdrawal(response.data.data)
        console.log(response.data.data)
        console.log(response.data.data.bankDetail)
        // setLoading(false)
    })
    .catch(error=>{
        console.log(error)
        // setLoading(false)
    })
    console.log(allWithdrawal)
  }

  useEffect(()=>{
    const id = setInterval(() => {
      getwithdrawals()
    },5000);
    return ()=> clearInterval(id)
  },[])

  const dataLength = allWithdrawal.length;


  const confirmWithdrawal = ()=>{
    // setLoading(true)
    axios.put(`https://hyve-finance-demo.onrender.com/api/v1/transactions/withdrawals/confirm/${transactionId}`)
    .then(response=>{
      console.log(response)
      // setLoading(false)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  const deleteWithdrawal =()=>{
    // setLoading(true)
    axios.put(`https://hyve-finance-demo.onrender.com/api/v1/transactions/withdrawals/reject/${transactionId}`)
    .then(response=>{
      console.log(response)
      // setLoading(false)
    })
    .catch(error=>{
      console.log(error)
    })
  }



  return (
    <div className='admincontainer'>
      <Withdrawaltopsection dataLength={dataLength} />
      <div className="pending-state">
        <select name="" id="">
          <option value="pending"> Pending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Bank Account</th>
            <th>Bank Name</th>
            <th>Name</th>
            <th>Amount</th>
            <th>TimeStamps</th>
            <th>Confirmation</th>
          </tr>
        </thead>
        <tbody>
        {allWithdrawal.map((item, i) => {
  const {status,BankAccount,BankName,fullname,amount,createdAt,_id,confirmation,bankDetail} = item;
  return (
    <tr key={_id}>
      <td className="status">{status}</td>
      <td>{bankDetail && bankDetail.accountNumber}</td>
      <td>{bankDetail && bankDetail.bankName}</td>
      <td>{fullname}</td>
      <td>{amount}</td>
      <td>{createdAt}</td>
      <td className=" confirmation">
      <p className='accept' onClick={()=>{
        setTransactionId(_id)
        console.log(transactionId)
        confirmWithdrawal()
        // getDeposit()
       }}>
        Accept
      </p>
      <p className='decline' onClick={()=>{
        setTransactionId(_id)
        console.log(transactionId)
        //  getDeposit()
        deleteWithdrawal()
       }}>
        Decline
      </p>
      </td>
    </tr>
  );
})}
        </tbody>
      </table>
    </div>
  );
 }

export default Withdrawal