import React, { useState, useEffect } from "react";
import { Button } from "../button/button";
import { CryptoButton } from "./../button/connectButton";
import { useAccount, useBalance } from "wagmi";
import { TokenABI } from "../../utils/TokenABI";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../Context/Context";
import axios from "axios";
import { ArrowLeft } from "iconsax-react";
import Paystack from "../paystack/paystack";
import "./makecryptopayment.css";

const Makecryptopayment = ({ onNext2, handleGoBack2 }) => {
  const { isConnected } = useAccount();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const { userData, userId } = useContext(UserContext);
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_REACT_APP_USDT_CONTRACT,
    abi: TokenABI,
    functionName: "transfer",
    args: [
      import.meta.env.VITE_REACT_APP_HYVE_FINANCE_ADDRESS,
      inputValue * 10 ** 6,
    ],
  });

  var { data } = useContractRead({
    address: import.meta.env.VITE_REACT_APP_USDT_CONTRACT,
    abi: TokenABI,
    functionName: "balanceOf",
    args: [address],
  });

  const userBalance = Number(data) / 1000000;

  var { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  let userId2 = localStorage.getItem("userID");

  const updateBalance = async () => {
    const amount = Number(inputValue) * 730;

    try {
      const data = {
        amount,
      };
      const response = await axios.post(
        `https://hyve-finance-demo.onrender.com/api/v1/transactions/${userId2}/cryptoDeposits`,
        data
      );

      // Handle response if needed
      if (response.status === 201) {
        console.log("Balance updated successfully");
      } else {
        console.log("Failed to update balance");
      }
    } catch (error) {
      console.log("Error occurred while updating balance:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      updateBalance();
      onNext2();
    }
  }, [isSuccess, onNext2]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  const handleNextClick = () => {
    if (Number(inputValue) < 10) {
      setError("Funding amount must be greater than 10 USDT");
    } else if (Number(inputValue) > userBalance) {
      setError("Insufficient balance to complete this transaction! ");
    } else {
      setError("");
      write();
    }
  };

  return (
    <>
      <main>{/* <Paystack /> */}</main>
      {/* <button onClick={handleGoBack2} className="go_back_text">
        <p>
          <ArrowLeft size="17" color="#073374" />
        </p>
        <p className="goback">Go to previous</p>
      </button>
      <div className='wallet-address'>
        <CryptoButton />
      </div>
      <div className='payment-crypto'>
        <h5>Fund your Hyve wallet</h5>
        <p>Pay this amount to your wallet</p>
        <div className='inputbox2' 
        // style={{ width: '500px', height: '55px', margin: '0 auto' }}
        >
          <input
            placeholder='Enter amount'
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        {isConnected && (
          <div className='cryptobtn'>
            <Button
              value={isLoading ? (
                <CircularProgress style={{ color: 'white' }} size={23} />
              ) : (
                'Make Payment'
              )}
              onClick={handleNextClick}
              disabled={Number(inputValue) < 10}
            />
          </div>
        )}
      </div> */}
    </>
  );
};

export default Makecryptopayment;
