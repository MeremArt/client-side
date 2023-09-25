// import React from 'react'
// import { AuthLayout } from '../../layouts'
// import Admintopsect from '../../Components/admintopsect/topsection'
// import './Deposit.css'

// const Deposits = () => {


//   const allDeposit = [
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 1
//     },
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 2
//     },
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 3
//     },
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 4
//     },
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 5
//     },
//     {
//       status: 'pending',
//       userId: 'hyve-0708',
//       name: ' Daniel Iheukwumere',
//       amount: 'N35,000',
//       timeStamps: 'Jan 05,23  -01:00 Am',
//       confirmation: {
//         accept: 'Accept',
//         decline: 'Decline'
//       },
//       id: 6
//     },
//   ]
//   return (
//     <div>
//        <Admintopsect/>

//        <div className='pending-state'>
//           <select name="" id="">
//             <option value="pending"> Pending</option>
//           </select>
//        </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>
//                   Status
//                 </th>
//                 <th>
//                 User ID
//                 </th>
//                 <th>
//                 Name
//                 </th>
//                 <th>
//                 Amount
//                 </th>
//                 <th>
//                 TimeStamps
//                 </th>
//                 <th>
//                 Confirmation
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {allDeposit.map((item,i)=>{
//                 const {status,userId,name,amount,timeStamps,id, confirmation}= item
//                 return(
//                   <tr key={id}>
//                   <td className='status'>
//                   {status}
//                   </td>
//                   <td>
//                   {userId}
//                   </td>
//                   <td>
//                   {name}
//                   </td>
//                   <td>
//                   {amount}
//                   </td>
//                   <td>
//                   {timeStamps}
//                   </td>
//                   <td className=' confirmation'>
//                     <p className='accept'>
//                       {confirmation.accept}
//                     </p>
//                     <p className='decline'>
//                       {confirmation.decline}
//                     </p>
//                   {/* {timeStamps} */}
//                   </td>
//                 </tr>
//                   )
//               })}
//             </tbody>
//           </table>
//     </div>
//   )
// }

// export default Deposits