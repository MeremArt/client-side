import React, { useContext, useEffect, useState } from 'react';
import { AuthLayout } from '../../layouts';
import './history.css';
import Commingsoon from '../../Components/commingsoon/commingsoon';
import '../../Components/commingsoon/commingsoon.css';
import axios from 'axios';
import { UserContext } from '../../Context/Context';
import { HambergerMenu } from 'iconsax-react';

let userId2 = localStorage.getItem('userID');

const History = () => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const {userTransaction, setUserTransaction,toggleMenu} = useContext(UserContext)

  useEffect(() => {
    const getUserTransactions = async () => {
      try {
        const response = await axios.get(
          `https://hyve-finance-demo.onrender.com/api/v1/transactions/user/${userId2}`
        );
        const historyData = response.data.data;
        setHistory(historyData);
        setUserTransaction(response.data.data)

        // if (response.status === 200) {
        //   console.log('The request was successful');
        // } else {
        //   console.log('Failed to get transaction records');
        // }
      } catch (error) {
        console.log('Error occurred while getting transaction records:', error);
      }
    };

    getUserTransactions();
    const intervalId = setInterval(getUserTransactions, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const itemsPerPage = 8;
    const totalPages = Math.ceil(history.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [history]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const displayedHistory = history.slice(startIndex, endIndex);

  const getTransactionTypeColor = (transactionType) => {
    switch (transactionType) {
      case 'send':
        return '#AA4B00';
      case 'deposit':
        return '#049793'
      case 'receive':
        return '#049793';
      case 'withdrawal':
        return '#AA4B00';
      default:
        return 'black';
    }
  };

  const getTransactionTypeName = (transactionType) => {
    switch (transactionType) {
      case 'send':
        return 'Transfer';
      case 'deposit':
        return 'Deposit';
      case 'receive':
        return 'Receive';
      case 'withdrawal':
        return 'Withdrawal';
      default:
        return '';
    }
  };

  const getTransactionStatusColor = (status) => {
    switch (status) {
      case 'successful':
        return '#049793'
      case 'pending':
        return '#AA4B00';
      case 'rejected':
        return '#cf0000';
      default:
        return 'black';
    }
  };

  const getTransactionStatusName = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'successful':
        return 'Successful';
      case 'rejected':
        return 'Declined';
      default:
        return '';
    }
  };

  return (
    <AuthLayout>
      <div className="soonpage">
        {/* <p className="soonpage-title">History</p> */}
        {/* <div className='commingsoon'>
        <Commingsoon/>
      </div> */}
      <div className="bread-crum history-menubar" onClick={toggleMenu}>
            <HambergerMenu size="30" color="#575656"/>
          </div>
        <div className="historytable">
          {displayedHistory.length > 0 ? (
            <table>
              <thead>
                <tr >
                  <th className="table-header" >Transaction ID</th>
                  <th className="table-header">Date</th>
                  <th className="table-header">Time</th>
                  <th className="table-header">Sender</th>
                  <th className="table-header">Receiver</th>
                  <th className="table-header">Amount</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Status</th>
                </tr>
              </thead>
              <tbody>
              {displayedHistory.map((item, i) => {
                const { transactionType, transactionId, sender, amount, time, date, _id, receiver,status } = item;
                const transactionTypeColor = getTransactionTypeColor(transactionType);
                const transactionTypeName = getTransactionTypeName(transactionType);
                const transactionStatusColor = getTransactionStatusColor(status);
                const transactionStatusName = getTransactionStatusName(status)
                return (
                  <tr key={i}>
                    <td className="table-cell">{transactionId}</td>
                    <td className="table-cell">{date}</td>
                    <td className="table-cell">{time}</td>
                    <td className="table-cell">{sender}</td>
                    <td className="table-cell">{receiver}</td>
                    <td  className="table-cell">{'NGN ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                    <td className="status table-cell" style={{ color: transactionTypeColor }}>
                      {transactionTypeName}
                    </td>
                    <td className="table-cell" style={{ color: transactionStatusColor }}>
                      {transactionStatusName}</td>
                  </tr>
                );
              })}
            </tbody>
            </table>
          ) : (
            <p className='no-records'>No recent transactions</p>
          )}
          <div className="pagination">
            {currentPage > 1 && (
              <button className="pagination-button" onClick={handlePreviousPage}>
                Previous Page
              </button>
            )}
            {currentPage < totalPages && (
              <button className="pagination-button" onClick={handleNextPage}>
                Next Page
              </button>
            )}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
  
};

export default History;
