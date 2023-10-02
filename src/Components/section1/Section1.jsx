import React, { useState, useEffect } from "react";
import "./section1.css";
import SecondInput from "../SecondInput";
import SecondDepositInput from "../SecondDepositInput";
import { Button } from "../button/button";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [secondInputValue, setSecondInputValue] = useState("");
  const [charge, setCharge] = useState(0);
  const [total, setTotal] = useState(0);

  const transactionCharge = 0.018;
  const usdtValue = 1100;
  const recipientValue =
    (secondInputValue * usdtValue)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " NGN";

  const calculateCharge = () => {
    const value = parseFloat(secondInputValue);
    if (value >= 1) {
      const calculatedCharge = (value * transactionCharge).toFixed(3);
      setCharge(calculatedCharge);
    } else {
      setCharge(0);
    }
  };

  const calculateTotal = () => {
    const value = parseFloat(secondInputValue);
    if (value >= 1) {
      const calculatedCharge = (value * transactionCharge).toFixed(2);
      const calculatedTotal = value + parseFloat(calculatedCharge);
      setTotal(calculatedTotal);
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    calculateCharge();
    calculateTotal();
  }, [secondInputValue]);

  return (
    <div className="first_section">
      <div className="first_side">
        <h3>
          Effortless Swapping Local Currency to Your Preferred Cryptocurrency.
        </h3>
        <p>
          Experience a Cutting-Edge Blockchain-Powered Solution that Ensures
          Swift, Secure, and Transparent Conversions of Your Local Currency to
          the Cryptocurrency of Your Choice, Tailored Specifically to Your
          Needs.
        </p>
      </div>
      <div className="second_side">
        <div className="convert_card">
          <div className="card_header">
            <p>Swap Your Currency with Ease!</p>
          </div>

          <div className="card_input_box">
            <p>Crypto equivalent</p>
            <SecondInput
              width="90%"
              height="32px"
              border="none"
              padding="0px"
              value={secondInputValue}
              onChange={(e) => setSecondInputValue(e.target.value)}
            />
          </div>

          <div className="card_input_boxx">
            <p>Local Currency</p>
            <SecondDepositInput
              width="90%"
              height="32px"
              border="none"
              padding="0px"
              value={recipientValue}
            />
          </div>

          <div className="under_text">
            <p className="huh">Transaction fee: {charge} USDT</p>
            {/* <p>Payment method: Bank Transfers</p> */}
          </div>

          <div className="total_conv">
            <p>Total pay: {total} USDT</p>
          </div>
          <Link to="signup">
            <div className="card__button">
              <button className="btn_create">Get started</button>
              <p>Charge is 1.8% USDT of the amount sent</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
