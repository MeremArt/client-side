import React, { useContext, useEffect, useState } from 'react';
import { AuthLayout } from "../../layouts";
import './dashboard.css';
import { Wallet1, WalletAdd1, Send2, Receive, WalletMinus, DollarCircle, TickCircle, ProfileCircle, HambergerMenu,CloseCircle } from "iconsax-react";
import Quicklink from "../../Components/quicklinks/quicklink";
import { Button, Input } from "../../Components";
import Select from "../../Components/select/select";
import AltInput from "../../Components/altInput/altInput";
import { UserContext } from "../../Context/Context";
import SecondInput from "../../Components/SecondInput";
import SecondDepositInput from "../../Components/SecondDepositInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { Chart } from './chart';

let userId2 = localStorage.getItem('userID');
const options = [
  { value: 'NGN', label: 'NGN' },
  // { value: 'USD', label: 'USD' },
  // { value: 'EUR', label: 'EUR' }
];

const options1 = [
  { value: '30 days', label: '30 days' },
  { value: '2 months', label: '2 months' },
  { value: '3 months', label: '3 months' }
];

const textts = [
  { id: 1, label: 'Deposits', url: '/deposit', icon: '' },
  { id: 2, label: 'Send', url: '/send', icon: '' },
  { id: 3, label: 'Receive', url: '/receive', icon: '' },
  { id: 4, label: 'Withdraw', url: '/withdraw', icon: '' }
];

const Dashboard = () => {
  const {userData,get_user,isOpen, toggleMenu} = useContext(UserContext);


  const [nairaValue, setNairaValue] = useState('');
  const [userTransaction, setUserTransaction] = useState([]);
  const recentActivities = userTransaction.slice(0, 3);
  const [error, setError] = useState('');

  const handleNairaChangee = (e) => {
    const inputValue = e.target.value;
    if (inputValue < 1) {
      setError('Value must not be less than 1');
      setNairaValue('');
    } else {
      setError('');
      setNairaValue(inputValue);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      get_user();
    }, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const getUserTransactions = async () => {
      try {
        const response = await axios.get(
          `https://hyve-finance-demo.onrender.com/api/v1/transactions/user/${userId2}`
        );
        const historyData = response.data.data;
        setUserTransaction(response.data.data);

        // if (response.status === 200) {
        //   console.log('The request was successful');
        // } else {
        //   console.log('Failed to get transaction records');
        // }
      } catch (error) {
        console.log('Error occurred while getting transaction records:', error);
      }
    };

    // Call the function immediately
    getUserTransactions();

    // Set interval to run every 10 seconds
    const intervalId = setInterval(getUserTransactions, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const usdtValue = (1 / 730);
  const userBalance = userData && (userData.balance * usdtValue).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  return (
    <AuthLayout>
      <div className="dash_container">
        <div className="header">
          <div className="menu">
            <p className="header-text-1">Overview</p>
            <p className="header-text-2">Send and receive funds with pleasure</p>
          </div>
          
          <div className="bread-crum" onClick={toggleMenu}>
            <HambergerMenu size="30" color="#575656"/>
          </div>
        </div>

        <div className="analytics">
          <div className="section1">
            <div className="card">
              <div className="card1">
                <div className="wallet-circle">
                  <Wallet1 size="20" color="#FF8A65" />
                </div>
                <div className="card-text">
                  <p className="ava-bal">Available Wallet Balance</p>
                  <p className="fig">{`${userBalance}`} USDT</p>
                </div>
              </div>
              <div className="card2">
                <div className="card2-text">
                  <p className="quick-link">Quick Links</p>
                  <div className="links">
                    <Quicklink />
                  </div>
                </div>
              </div>
            </div>

            <div className="imaginary">
              <div className="statistics">
                <Chart />
              </div>
            </div>
          </div>

          <div className="section2">
            <div className="conversion">
              <p className="quick-link">Conversion</p>
              <SecondInput label="Naira" value={nairaValue} onChange={handleNairaChangee} />
              {error && <p className="con-text">{error}</p>}
              <div className="space"></div>
              <SecondDepositInput label="USDT" value={(nairaValue * usdtValue).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " USDT"} />
              <p className="con-text">Conversion rates are in line with the commercial rates</p>
            </div>

            <div className="imaginary2">
              <div className="recents">
                <div className="small-act">
                  <p>Recent Activities</p>
                  <ul className="ul-box">
                    {recentActivities.map((activity) => {
                      const { transactionId, transactionType, status, amount, receiver, sender, time } = activity;
                      let usdtAmount = (amount * usdtValue)
                      if (usdtAmount % 1 !== 0) {
                        usdtAmount = (Math.floor((amount * usdtValue) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        usdtAmount = usdtAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      if (transactionType === 'send') {
                        return (
                          <li className="li-box" key={transactionId}>
                            <span className="icon-icon">
                              <DollarCircle size="20" color="#FF8A65" />
                            </span>
                            <span className="flex-icon">
                              You have successfully sent {usdtAmount} USDT to {receiver}.
                              <br />
                                <span className='time'>{time}</span>
                            </span>
                          </li>
                        );
                      } else if (transactionType === 'withdrawal') {
                        if (status === 'pending') {
                          return (
                            <li className="li-box" key={transactionId}>
                              <span className="icon-icon">
                                <TickCircle size="20" color="#FF8A65" />
                              </span>
                              <span className="flex-icon">
                                Your withdrawal of {usdtAmount} USDT is pending approval!
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                        }else if (status === 'rejected') {
                          return (
                            <li className="li-box" key={transactionId}>
                                <span className="icon-icon">
                              <CloseCircle size="20" color="#FF8A65" />
                            </span>
                              <span className="flex-icon">
                                Your withdrawal of {usdtAmount} USDT was declined by an admin.
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                        } else {
                          return (
                            <li className="li-box" key={transactionId}>
                              <span className="icon-icon">
                                <TickCircle size="20" color="#FF8A65" />
                              </span>
                              <span className="flex-icon">
                                Your withdrawal of {usdtAmount} USDT is successful!
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                        }
                      } else if (transactionType === 'receive') {
                        return (
                          <li className="li-box" key={transactionId}>
                            <span className="icon-icon">
                              <ProfileCircle size="20" color="#FF8A65" />
                            </span>
                            <span className="flex-icon">
                              Payment received, you just received {usdtAmount} USDT from {receiver}.
                                <br />
                                <span className='time'>{time}</span>
                            </span>
                          </li>
                        );
                      } else if (transactionType === 'deposit') {
                        if (status === 'pending') {
                          return (
                            <li className="li-box" key={transactionId}>
                                <span className="icon-icon">
                              <DollarCircle size="20" color="#FF8A65" />
                            </span>
                              <span className="flex-icon">
                                Your deposit of {usdtAmount} USDT is pending approval by an admin.
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                          
                        } else if (status === 'rejected') {
                          return (
                            <li className="li-box" key={transactionId}>
                                <span className="icon-icon">
                              <CloseCircle size="20" color="#FF8A65" />
                            </span>
                              <span className="flex-icon">
                                Your deposit of {usdtAmount} USDT was declined by an admin.
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                        }
                        else {
                          return (
                            <li className="li-box" key={transactionId}>
                              <span className="icon-icon">
                              <DollarCircle size="20" color="#FF8A65" />
                            </span>
                              <span className="flex-icon">
                                You have successfully funded your account with {usdtAmount} USDT.
                                <br />
                                <span className='time'>{time}</span>
                              </span>
                            </li>
                          );
                        }
                      }

                      return null; // Add this line to handle other cases or invalid data
                    })}
                    <Link to="/history">See all activities</Link>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
