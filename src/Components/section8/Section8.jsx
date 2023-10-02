import React from "react";
import "./section8.css";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { BsSendCheckFill } from "react-icons/bs";
const Section8 = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your logic here to handle the subscription
    const email = e.target.email.value; // Get the entered email
    alert(`You have subscribed with the email: ${email}`);
  };
  return (
    <div className="eight_section">
      <div className="vodo">
        <h3>Stay in the loop, join our newsletter</h3>
        <p className="des">
          Are you ready to be part of something special? Our newsletter is your{" "}
          <br />
          Ready to stay ahead in the world of digital currencies? By joining the
          <br /> SwapXpress newsletter, you'll unlock a realm of valuable <br />
          insights, real-time updates, and exclusive offers!.
          <br />
        </p>

        <p className="fyt">
          With our platform, you can effortlessly send and receive payments
          across borders, enabling you to explore new markets and seize
          international opportunities, don't let borders hold you back any
          longer. It's time to break free and experience the power of seamless
          cross-border transactions.
        </p>

        <button type="submit" className="join-newsletter-button">
          <BsSendCheckFill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Section8;
