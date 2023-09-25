import React, { useEffect,useContext, useState } from 'react'
import { AuthLayout } from '../../layouts'
import Admintopsect from '../../Components/admintopsect/topsection'
import './Admindeposits.css'
import axios from 'axios'
import { UserContext } from '../../Context/Context'


const Admindeposits = () => {

  const {allDeposits,setAllDeposits,loading,setLoading} = useContext(UserContext)
  const [totalDeposits,setTotalDeposits] = useState('')
  const [transactionId, setTransactionId]= useState('')

const getDeposit = async ()=>{
  // setLoading(true)
  try {
    const response = await axios.get('https://hyve-finance-demo.onrender.com/api/v1/transactions/deposits')
      setAllDeposits(response.data.data)
  } catch (error) {
    console.log(error)
  }
  // setLoading(false)
}



    useEffect(()=>{
      const id = setInterval(() => {
        getDeposit()
      },5000);
      return ()=> clearInterval(id)
    },[])

    const dataLength = allDeposits.length;


    const confirmDeposit = async ()=>{
      // setLoading(true)
      // setTransactionId(_id)
      try{
        const response = await  axios.post(`https://hyve-finance-demo.onrender.com/api/v1/transactions/deposits/confirm/${transactionId}`)
        console.log(response)
        setLoading(false)
      }
      catch(error){
        console.log(error)
      }
    }


    const deleteDeposit = async ()=>{
      // setLoading(true)
      // setTransactionId(_id)

      try{
        const response = await axios.post(`https://hyve-finance-demo.onrender.com/api/v1/transactions/deposits/reject/${transactionId}`)
        console.log(response)
        setLoading(false)
      }
      catch(error){
        console.log(error)
      }
    }

  console.log(dataLength)

  return (
    <div className='admincontainer'>
       <Admintopsect dataLength={dataLength} />
       <div className='pending-state'>
          <select name="" id="">
            <option value="pending"> Pending</option>
          </select>
       </div>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>TimeStamps</th>
                <th>Confirmation</th>
              </tr>
            </thead>
            <tbody>
              {
              //  loading ? <>loading</> :
               allDeposits.map((item)=>{
                  const {status,hyveId,fullname,amount,createdAt,_id, confirmation}= item
                  return(
                    <tr key={_id}>
                    <td className='status'>{status}</td>
                    <td>{hyveId}</td>
                    <td>{fullname}</td>
                    <td>{amount}</td>
                    <td>{createdAt}</td>
                    <td className=' confirmation'>
                      <p className='accept' onClick={()=>{
                        setTransactionId(_id)
                        console.log(transactionId)
                        transactionId && confirmDeposit()
                        getDeposit()
                      }}>
                        Accept
                      </p>
                      <p className='decline' onClick={()=>{
                        setTransactionId(_id)
                        transactionId &&deleteDeposit()
                        getDeposit()
                      }}>
                        Decline
                      </p>
                    </td>
                  </tr>
                    )
                })
              }
            </tbody>
          </table>
    </div>
  )
}

export default Admindeposits
