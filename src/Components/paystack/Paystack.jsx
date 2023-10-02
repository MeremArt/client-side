import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
import "./paystack.css";

const Paystack = ({ onNext, handleGoBack }) => {
  const publicKey = "pk_test_81acdd993a25a8ace054532fd01ae2238d46bcc4";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setAmount("");
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () =>
      alert(
        "Please ensure that you confirm transactions before proceeding or leaving."
      ),
  };

  return (
    <div className="pay-form-container">
      <form onSubmit={""}>
        <div className="pay-form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="pay-form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="pay-form-group">
          <input
            type="text"
            id="subject"
            name="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="pay-form-group">
          <input
            type="number"
            id="amount"
            name="subject"
            placeholder="Amount (in Naira)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Convert to kobo
            required
          />
        </div>
        {/* 
        <PaystackButton {...componentProps} /> */}
      </form>
    </div>
  );
};

export default Paystack;
